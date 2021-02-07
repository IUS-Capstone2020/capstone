import {Component, OnInit} from '@angular/core';
import {Mask} from '../models/Mask';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  selectedMask: Mask;
  active = 'top';

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSelect(mask: Mask) {
    if (this.selectedMask && this.selectedMask.name === mask.name) {
      this.selectedMask = null;
      return;
    }
    this.selectedMask = mask;
    console.log(mask.name);
  }
}
