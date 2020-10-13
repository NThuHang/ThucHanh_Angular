import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  kq:any;
  x:any;
  n:any;
  constructor() { }
  ngOnInit(): void {
  }
  Tinh1(){
    let s = 0;
    for(let i=1;i<=Number.parseInt(this.n);++i){
      s += Math. pow(Number.parseInt(this.x), i);
   }
   this.kq= s;
  }
}
