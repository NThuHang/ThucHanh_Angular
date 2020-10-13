import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai6',
  templateUrl: './bai6.component.html',
  styleUrls: ['./bai6.component.css']
})
export class Bai6Component implements OnInit {

  constructor() { }

  ds=[-10,2,4,9,-2,10,-5,-18,23,-9,5,12];
  kq =0;
  ngOnInit(): void {
    for(let i=0; i<this.ds.length;i++)
    {
      if(this.ds[i]>0)
      this.kq+=this.ds[i];
    }
  }
}
