import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {

  ds = [{hoten: 'Nguyen Văn Linh', diemthi:7.9},{hoten: 'Nguyen Thi Mai', diemthi:9},{hoten: 'Tran Thi Mai', diemthi:7.5},{ hoten: 'Hoang Thi Dung', diemthi:8.3}];
  constructor() { }
  ngOnInit(): void {
  }
  sapxep(){ 
    let catten = (s) => {
      let n =  s.lastIndexOf(' ');
      return s.substr(n+1) + ' ' + s.substr(0,n);
    }
    this.ds.sort((a,b)=> {
      if(catten(a.hoten)>catten(b.hoten)) return 1;
      else if(catten(a.hoten)<catten(b.hoten)) return -1;
      return 0;
    });
  }
}
