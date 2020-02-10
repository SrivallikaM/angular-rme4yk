import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertiesComponent } from './properties/properties.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { PropertySharesComponent } from './property-shares/property-shares.component';
import { AboutComponent } from './about/about.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ListDetailsComponent } from './list-details/list-details.component';
import { RatingComponent } from './rating/rating.component';
import {HttpDataService} from '../httpData.service'


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, NavBarComponent, PropertiesComponent, PortfoliosComponent, PropertySharesComponent, AboutComponent, ListDetailsComponent, RatingComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HttpDataService]
})
export class AppModule { }
