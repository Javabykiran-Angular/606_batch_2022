 export class Myclass{
   public fname:string;
   private lname:string;
   protected id:number;

     //either parameter Less Constructor
     // Parametiszed constructor
     constructor(f:string,l:string,id:number){
          this.fname=f;
          this.lname=l;
          this.id=id;
     }     



      Display(){
      console.log(`
          First Name :: ${this.fname}
          Last name  :: ${this.lname}
          ID         :: ${this.id}
      `)
    }


}

// const obj=new Myclass("Sumit",'Raokhande',9);
// obj.Display();



export function add(a:number,b:number){

  return (a+b);

}

export const pi=3.14;
