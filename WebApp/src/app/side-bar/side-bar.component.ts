import { Component, OnInit } from '@angular/core';
import {MASKS} from '../data/masks';
import {Mask} from '../model/Mask';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  masks = MASKS;
  selectedOption: Mask;
  active = 'top';
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(mask: Mask) {
    if (this.selectedOption && this.selectedOption.name === mask.name) {
      this.selectedOption = null;
      return;
    }
    this.selectedOption = mask;
    console.log(mask.name);
  }
}

