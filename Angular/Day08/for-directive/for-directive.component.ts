import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {


    course:string[]=['Angular 8','React Js','Vue Js','Embber Js','JSP'];

    arrProduct=[
      {
        name:'Samsung',
        price:22000,
        quantity:1
      },
      {
        name:'Realme',
        price:18000,
        quantity:1
      },
      {
        name:'OnePlus',
        price:42000,
        quantity:1
      },
      {
        name:'Motorolla',
        price:32000,
        quantity:1
      }
    ];


    selected:string='';

  constructor() { }

  ngOnInit() {
  }

  onMouseover(myitem){
    console.log("Mouseover event occur");
    // console.log(myitem)
    this.selected=myitem.name;
  }

  onMouseOut(){
    console.log("--------Mouse out event occur-----------")
    this.selected='';
  }

}
