import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {


    strdata:string='Sumit Raokhande';

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

   @Output() ChildStrEvent=new EventEmitter();

   @Output() ChildArrObjEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onSend(){
      this.ChildStrEvent.emit(this.strdata)

      this.ChildArrObjEvent.emit(this.arrProduct);
  }

}
