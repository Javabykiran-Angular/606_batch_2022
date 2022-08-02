import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id:string='';
  title:string='';
  body:string='';
  isHidden:boolean=true;

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

  onSend(mytitle:string,mybody:string){
      let obj={
        title:mytitle,
        body:mybody
      }

      this.service.SendData(obj)
      .subscribe((response)=>{

          console.log(response);
      })

  }


  onEdit(item){
    console.log(item);

      this.id=item.id;
      this.title=item.title;
      this.body=item.body;
      this.isHidden=false;

  }


  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.Updatedata(obj)
    .subscribe((response)=>{
      console.log(response)
    })

  }



}
