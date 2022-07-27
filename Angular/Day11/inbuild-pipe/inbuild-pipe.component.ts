import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim veritatis, at numquam eius vero pariatur accusantium nam quasi doloremque cum molestiae sunt nemo quaerat voluptatibus ratione maxime! Praesentium, saepe quae?';

  num2:number=-456.123789456;
  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
