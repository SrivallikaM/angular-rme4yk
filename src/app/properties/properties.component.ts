import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {HttpDataService} from '../../httpData.service'

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
propertiesData:any[];
  constructor(private _http:HttpClient,private _router:Router,private _httpData:HttpDataService) { }

  ngOnInit() {
   this.propertiesData = this._httpData.getData().properties;
  }

  check(id)
  {
   this._router.navigate(['detail', id])
  }

}