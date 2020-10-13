import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai7',
  templateUrl: './bai7.component.html',
  styleUrls: ['./bai7.component.css']
})
export class Bai7Component implements OnInit {

  constructor() { }
  a:number;
  b:number;
  c:number;
  kq:number[];
  ngOnInit(): void {
  }
  Tinh(){
    var pttp =new PTTP(this.a,this.b,this.c);
    this.kq=pttp.giaipttp();
  }
  
}
export class PTB2{
  a:number;
  b:number;
  c:number;
  kq ="";
  constructor(a:number,b:number,c:number){
    this.a=a;
    this.b=b;
    this.c=c;
  }
  public giatpt(){
    let nghiem:any[];
    if(this.a!=0){
      let delta=Math.pow(this.b,2)-(4*this.a*this.c);
      if(delta>0){
        let x1=(-this.b+Math.sqrt(delta))/(2*this.a);
        let x2=(-this.b-Math.sqrt(delta))/(2*this.a);
        nghiem=[x1,x2];
        return nghiem;
      }
      if(delta==0){
        let x1=(-this.b)/(2*this.a);
        nghiem=[x1];
        return nghiem;
      }else{
        return null;
      }
    } else{
      return null;
    }
  }
}

export class PTTP extends PTB2{
  constructor(a:number,b:number,c:number){
    super(a,b,c);
  }
  public giaipttp(){
    let nghiem:number[];
    let ngiempttp:number[];
    nghiem= this.giatpt();
    switch(nghiem.length){
      case 0:{
        return null;
        break;
      } 
      case 1:{
        if(nghiem[0]>=0){
          ngiempttp=[Math.sqrt(nghiem[0])];
          return ngiempttp;
        }else return null;
        break;
      }
      case 2:{
        if(nghiem[0]>=0&&nghiem[1]>0){
          ngiempttp=[Math.sqrt(nghiem[0]),Math.sqrt(nghiem[1]),-Math.sqrt(nghiem[0]),-Math.sqrt(nghiem[1])];
          return ngiempttp;
        }
        else if(nghiem[0]>=0){
          ngiempttp=[Math.sqrt(nghiem[0]),-Math.sqrt(nghiem[0])];
          return ngiempttp;
        }
        else if(nghiem[1]>=1){
          ngiempttp=[Math.sqrt(nghiem[1]),-Math.sqrt(nghiem[0])];
          return ngiempttp;
        } else return null;
        break;
      }
    }
  }
}
