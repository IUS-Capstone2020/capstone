import { Component, OnInit } from '@angular/core';

import {MaskDataService} from '../mask-data.service';


import {Observable} from 'rxjs';

@Component({
  selector: 'app-aucdetails',
  templateUrl: './aucdetails.component.html',
  styleUrls: ['./aucdetails.component.css']
})
export class AucdetailsComponent implements OnInit {


  maskNames: Observable<string[]>;

  constructor(
    private maskDataService: MaskDataService
  ) { }

  ngOnInit(): void {
    this.maskNames = this.maskDataService.getMaskName();

  }

}
/*
 */
