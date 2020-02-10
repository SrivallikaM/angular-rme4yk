import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
@Input() rating;
array:any=[];
  constructor() { }

  ngOnInit() {
    for(var i=0;i<this.rating;i++)
    {
this.array.push(this.rating)
    }
    
  
  }

}