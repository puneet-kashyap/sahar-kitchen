import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    require('../../../assets/images/gallery/IMG-20181006-WA0008.jpg'),
    require('../../../assets/images/gallery/IMG-20181006-WA0010.jpg'),
    require('../../../assets/images/gallery/IMG-20181006-WA0018.jpg'),
    require('../../../assets/images/gallery/IMG-20181006-WA0011.jpg'),
    require('../../../assets/images/gallery/IMG-20181006-WA0029.jpg'),
  ]

}
