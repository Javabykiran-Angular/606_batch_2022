import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  result:number;
  constructor() { }

  ngOnInit() {
  }

  onSend(myname){

    console.log(myname);
    console.log(myname.value);
    myname.style.background='green';
    myname.style.color='white';
  }

  onSend1(namevalue){
    console.log("=====>>> "+namevalue)
  }

  onAddition(num1,num2){

      let n1=+num1;
      let n2=+num2;

    // this.result=num1+num2;
    this.result=n1+n2;
  }

  onChange(myinput1){
    console.log("Change Event Occur...")

    console.log(myinput1.value)
    myinput1.style.background='red';
    myinput1.style.color='white';

  }

  onkeyUp(){
    console.log("key Up Event Occur")
  }


  onkeyDown(){
    console.log("key Down Event Occur")
  }

}
