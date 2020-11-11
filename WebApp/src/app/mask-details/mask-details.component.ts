import { Component, Input, OnInit } from '@angular/core';
import {Mask} from '../model/Mask';
import {MASKS} from '../data/masks';

@Component({
  selector: 'app-mask-details',
  templateUrl: './mask-details.component.html',
  styleUrls: ['./mask-details.component.css']
})
export class MaskDetailsComponent implements OnInit {
  @Input() mask: Mask;
  constructor() { }

  ngOnInit(): void {
  }

}
