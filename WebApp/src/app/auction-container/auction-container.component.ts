import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import {Mask, MaskDataService} from '../mask-data.service';

import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-auction-container',
  templateUrl: './auction-container.component.html',
  styleUrls: ['./auction-container.component.css']
})
export class AuctionContainerComponent implements OnInit {
  selectedMaskName: string;
  selectedMask: Observable<Mask>;

  constructor(
    private maskDataService: MaskDataService,

    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.selectedMask = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Mask> => {
        return this.maskDataService.getMask(params.get('name'));

      })
    );
  }

  public selectAuction(name: string): void {
    this.selectedMask = this.maskDataService.getMask(name);
    if (!this.selectedMask) {

      this.router.navigateByUrl('/notfound');
    }
  }
}

/*
import { Component, OnInit} from '@angular/core';
import {AUCTIONS} from '../data/auctions';
import {Auction} from '../models/Auction';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auction-container',
  templateUrl: './auction-container.component.html',
  styleUrls: ['./auction-container.component.css']
})
export class AuctionContainerComponent implements OnInit {
     auctions = AUCTIONS;
   selectedAuction: Auction;
   model = 1;
     constructor() { }
     ngOnInit(): void {
     }
     onSelect(auction: Auction ) {
       if (this.selectedAuction && this.selectedAuction.date === auction.date){
         this.selectedAuction = null;
         return;
       }
       this.selectedAuction = auction;
       console.log(auction.date);
     }
}
*/
