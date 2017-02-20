export class Task{
  Sno : number = 0;
  date : Date;
  title : string;
  description : string;
  priority : string;
  
  // constructor(){
  //   this.title="";
  //   this.description="";
  //   this.priority = "";
  // }
  
  constructor(date: Date,title:string,desc:string,priority:string){
    this.Sno += 1;
    this.date = date;
    this.title = title;
    this.description= desc;
    this.priority=priority;
  }
}

