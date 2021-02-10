import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {DetailsComponent} from './details/details.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContainerComponent} from './container/container.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'masks', component: DetailsComponent},
  {path: 'masks/:name', component: ContainerComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: '**', redirectTo: '/homepage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
