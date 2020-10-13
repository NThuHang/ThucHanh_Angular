import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai8',
  templateUrl: './bai8.component.html',
  styleUrls: ['./bai8.component.css']
})
export class Bai8Component implements OnInit {
  a:number;
  b:number;
  c:number;
  h:number;
  dt:number;
  kq:number;
  constructor() { }

  ngOnInit(): void {
  }
  TheTich(){
    var tt =new Chop(this.a,this.b,this.c,this.h);
    this.kq=tt.thetich();
  }
}
export class TamGiac{
  a:number;
  b:number;
  c:number;
  constructor(a:number,b:number,c:number){
    this.a=a;
    this.b=b;
    this.c=c;
  }
  public TinhDienTich():number{
    return Math.sqrt((this.a+ this.b+ this.c)*( this.b+ this.c- this.a)*( this.a+ this.b- this.c)*( this.a+ this.c-this.b));
  }
}
export class Chop extends TamGiac {
  h:number;
  constructor(a:number,b:number,c:number,h:number){
    super(a,b,c);
    this.h=h;
  }
  public thetich():number{
    return (this.TinhDienTich()*this.h)/3;
  }
}