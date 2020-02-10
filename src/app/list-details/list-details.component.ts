import { Component, OnInit,HostListener } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import {HttpDataService} from '../../httpData.service'
@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
propertiesData:any;
id:number;
image:any;
reqObj:any={};
isSticky:Boolean=false;
  constructor(private _http:HttpClient, private router:Router,private activatedRoute:ActivatedRoute,private _httpData:HttpDataService) { }

  ngOnInit() {

     this.activatedRoute.params.subscribe((data)=>{
      this.id = data['id'];
    });
      this.propertiesData = this._httpData.getData().properties;
      
      this.reqObj = this.propertiesData.filter((value)=>{if(value.id == this.id) return true;}); 
   this.image = this.reqObj[0].mainImageUrl;
  // this.image = this.sanitization.bypassSecurityTrustStyle(`url(${this.image})`);   
  }

  goBack()
  {
    this.router.navigate(['properties'])
  }
    @HostListener('window:scroll', ['$event'])
    checkScroll() {    
    this.isSticky = window.pageYOffset > 100;
  }

}