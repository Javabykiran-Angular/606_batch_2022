import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    strData:string='Data Send From Parent...';

    jsonObj={
      name:'Sumit',
      id:9,
      role:'DevOps'
    }

    StrDataRecived:string='';

    ArrDataReceived=[];

  constructor() { }

  ngOnInit() {
  }

}
