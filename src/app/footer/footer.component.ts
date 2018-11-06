import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() {}
  phone = environment.companyPhoneNumber;
  address1 = environment.companyAddress;
  address2 = `${environment.companyCity} ${environment.companyProvince} ${environment.companyCountry}`

  ngOnInit() {}
}
