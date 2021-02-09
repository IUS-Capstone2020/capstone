import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Mask, DataService} from '../data.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auction-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  selectedMask: Observable<Mask>;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    config: NgbCarouselConfig
  ) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.selectedMask = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Mask> => {
        return this.dataService.getMask(params.get('name'));
      })
    );
  }

  public selectMask(name: string): void {
    this.selectedMask = this.dataService.getMask(name);
    if (!this.selectedMask) {
      this.router.navigateByUrl('/notfound');
    }
  }
}
