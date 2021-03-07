import {Component, OnDestroy, OnInit} from "@angular/core";
import {CartItem} from "app/models/cart-item.model";
import {DeliveryOption} from "app/models/delivery-option.model";
import {Product} from "app/models/product.model";
import {ShoppingCart} from "app/models/shopping-cart.model";
import {DeliveryOptionsDataService} from "app/services/delivery-options.service";
import {ProductsDataService} from "app/services/products.service";
import {ShoppingCartService} from "app/services/shopping-cart.service";
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";
import {Observable, Subscription} from "rxjs";
import {ITransactionItem} from "../../models/ITransactionItem";

interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: "app-checkout",
  styleUrls: ["./checkout.component.css"],
  templateUrl: "./checkout.component.html"
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public deliveryOptions: Observable<DeliveryOption[]>;
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public payPalCartItems: ITransactionItem[];
  public itemCount: number;
  public payPalConfig?: IPayPalConfig;
  public grossTotal: number;
  private products: Product[];
  private cartSubscription: Subscription;
  private success: boolean;
  private ShoppingCart: ShoppingCart;
  private deliveryTotal: number;

  public constructor(private productsService: ProductsDataService,
                     private deliveryOptionService: DeliveryOptionsDataService,
                     private shoppingCartService: ShoppingCartService) {
  }

  public ngOnInit(): void {
    this.initConfig();
    this.deliveryOptions = this.deliveryOptionService.all();
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.productsService.all().subscribe((products) => {
        this.products = products;
        this.payPalCartItems = cart.ppItems;
        this.cartItems = cart.items
          .map((item) => {
            const product = this.products.find((p) => p.id === item.productId);
            return {
              ...item,
              product,
              totalCost: product.price * item.quantity
            };
          });
      });
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public setDeliveryOption(option: DeliveryOption): void {
    this.shoppingCartService.setDeliveryOption(option);
  }

  public getGrossTotal(): number {
    this.cart.subscribe((ShoppingCart) => this.ShoppingCart = ShoppingCart);
    this.grossTotal = Math.round((this.ShoppingCart.grossTotal + Number.EPSILON) * 100) / 100 ;
    return this.grossTotal;
  }

  public getPayPalItems(): ITransactionItem[] {
    this.cart.subscribe((ShoppingCart) => this.ShoppingCart = ShoppingCart);
    this.payPalCartItems = this.ShoppingCart.ppItems;

    console.log("pushing paypal cart shipping");
    this.payPalCartItems.push({
      name: "Shipping",
      quantity: "1",
      unit_amount: {
        currency_code: "USD",
        value: this.getDeliveryTotal().toString(),
      }
    });
    console.log("finished pushing paypal cart shipping");
    return this.payPalCartItems;
  }

  public getDeliveryTotal(): number {
    this.cart.subscribe((ShoppingCart) => this.ShoppingCart = ShoppingCart);
    this.deliveryTotal = this.ShoppingCart.deliveryTotal;
    return this.deliveryTotal;
  }

  private initConfig(): void {
    this.payPalConfig = {
      clientId: "AdiTNDny4Ni7fVZ10yaTX03vsxBtHmYFBZfZNKq_AHs7IXB6cBqDkZ62lm7GwHTco1ddWEYIW5buPszI",
      currency: "USD",
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: this.getGrossTotal().toString(),
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: this.getGrossTotal().toString()
                }
              }
            },
            items: this.getPayPalItems(),
          }
        ]
      },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data, actions) => {
        console.log("onApprove - transaction was approved, but not authorized", data, actions);
        actions.order.get().then((details) => {
          console.log("onApprove - you can get full order details inside onApprove: ", details);
        });
        this.ngOnDestroy();
      },
      onClientAuthorization: (data) => {
        console.log("onClientAuthorization - you should probably inform your server about completed transaction at this point", data);
        this.success = true;
      },
      onCancel: (data, actions) => {
        console.log("OnCancel", data, actions);
      },
      onError: (err) => {
        console.log("OnError", err);
      },
      onClick: (data, actions) => {
        console.log("onClick", data, actions);
      },
    };
  }
}
