import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

  onSubmit(form:NgForm){
    console.log(form);
  }

}
