import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai5',
  templateUrl: './bai5.component.html',
  styleUrls: ['./bai5.component.css']
})
export class Bai5Component implements OnInit {

  constructor() { }
  ds = [1,3,4,6,9,12,16,19,21,25,30,34,36,40];
  kq = [];
  ngOnInit(): void {
    let sochinhphuong = (n) =>{
      return   Math.pow(Math.floor(Math.sqrt(n)),2)==n;
    }
    this.kq= this.ds.filter(sochinhphuong);
  }

}
