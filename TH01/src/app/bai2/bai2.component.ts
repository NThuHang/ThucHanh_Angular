import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {
  kq:any;
  x:any;
  n:any;
  constructor() { }

  ngOnInit(): void {
  }
  Tinh2(){
    let s = 0;
    for(let i=1;i<=Number.parseInt(this.n);++i){
      s += Math.pow(-1,i)*Math.pow(Number.parseInt(this.x),i)/i;
   }
   this.kq= s;
  }
}
