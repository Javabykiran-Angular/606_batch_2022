import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetPostData();
  }

  GetPostData(){
    this.service.getPost()
    .subscribe((myresponse)=>{
      console.log(myresponse)
      this.posts=(<any>myresponse);
    })
  }



}
