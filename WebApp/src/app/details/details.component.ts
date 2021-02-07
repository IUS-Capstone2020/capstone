import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  maskNames: Observable<string[]>;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.maskNames = this.dataService.getMaskName();
  }

}
