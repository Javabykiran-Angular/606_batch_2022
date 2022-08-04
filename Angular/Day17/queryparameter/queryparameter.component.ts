import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

    myjson={
      id:0,
      name:'',
      role:''
    }
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.GetDataFromUrl();
  }

  GetDataFromUrl(){
      this.route.queryParamMap
      .subscribe((param)=>{
        this.myjson.id=+param.get("id")
        this.myjson.name=param.get("name");
        this.myjson.role=param.get("role")
      })
  }

}
