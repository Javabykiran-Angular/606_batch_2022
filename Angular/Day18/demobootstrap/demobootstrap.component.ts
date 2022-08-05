import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {


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

  constructor() { }

  ngOnInit() {
  }

}
