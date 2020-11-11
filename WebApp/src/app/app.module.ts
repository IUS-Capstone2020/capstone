import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SearchFeatureComponent } from './search-feature/search-feature.component';
import { MaskDetailsComponent } from './mask-details/mask-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SearchFeatureComponent,
    MaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
