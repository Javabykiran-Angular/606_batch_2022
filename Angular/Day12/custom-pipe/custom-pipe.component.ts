import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime totam voluptatum ipsum consequuntur dolor quasi. Fugit asperiores voluptatibus, quo ratione alias ut ipsa illo ipsam consequuntur at dicta harum impedit?';
  constructor() { }

  ngOnInit() {
  }

}
