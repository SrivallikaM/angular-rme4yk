import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { PropertiesComponent } from '../properties/properties.component';
import { PortfoliosComponent } from '../portfolios/portfolios.component';
import { PropertySharesComponent } from '../property-shares/property-shares.component';
import { AboutComponent } from '../about/about.component';
import {ListDetailsComponent} from '../list-details/list-details.component'

const appRoutes: Routes =[
   {
    path:'', component:PropertiesComponent,pathMatch:'full'
  },
  {
    path:'properties', component:PropertiesComponent
  },
   {
    path:'portfolios', component:PortfoliosComponent
  },
    {
    path:'propertyShares', component:PropertySharesComponent
  },
    {
    path:'about', component:AboutComponent
  },
    {
    path:'detail/:id', component:ListDetailsComponent
  },

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
