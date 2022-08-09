import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demotdf',
  templateUrl: './demotdf.component.html',
  styleUrls: ['./demotdf.component.css']
})
export class DemotdfComponent implements OnInit {



  contactMethod:any[]=[
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
    {id:3,name:'Office Phone'}
  ];


  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){

    console.log("Username => "+f.value.myusername);
    console.log("Radio Button => "+f.value.con);
  }

}
