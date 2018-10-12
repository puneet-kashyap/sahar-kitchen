import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  times = ['11:30 am', '12:00 pm', '01:00 pm', '01:30 pm', '02:00 pm', '02:30 pm',
    '05:00 pm', '06:00 pm', '07:00 pm', '08:00 pm', '09:00 pm', '10:00 pm'];

  submitted = false;
  submittedForm;

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response`);
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    if (form.valid) {
      this.submittedForm = form.value;
      this.submitted = true;
      window.scroll(0,0);
    }
  }

}
