import { Component, OnInit } from "@angular/core";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize
} from "ngx-gallery";

declare const require: any;

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {}

  getImages () {

  }

  ngOnInit() {
    this.galleryOptions = [
      {
        breakpoint: 1500,
        width: "1200px",
        height: "400px",
        thumbnailsColumns: 8,
        thumbnailsMargin: 2,
        thumbnailsPercent: 40,
        imageAnimation: NgxGalleryAnimation.Slide,
        imagePercent: 100,
        imageSwipe: true,
        imageSize: NgxGalleryImageSize.Contain,
        imageInfinityMove: true
      },
      { imageAutoPlay: true, imageAutoPlayPauseOnHover: true, previewAutoPlay: true, previewAutoPlayPauseOnHover: true },
      // max-width 800
      {
        breakpoint: 800,
        width: "600px",
        height: "400px",
        imagePercent: 80,
        thumbnailsColumns: 4,
        thumbnailsPercent: 20,
        thumbnailsMargin: 0,
        imageSwipe: true,
        thumbnailsSwipe: true,
        thumbnailsAsLinks: true,
        previewAutoPlay: true,
        thumbnailsMoveSize: 2,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.galleryImages = [
      {
        small: require('../../assets/images/gallery/IMG-20181006-WA0003.jpg'),
        medium: require('../../assets/images/gallery/IMG-20181006-WA0003.jpg'),
        big: require('../../assets/images/gallery/IMG-20181006-WA0003.jpg')
      },
      {
        small: require('../../assets/images/gallery/IMG-20181006-WA0004.jpg'),
        medium: require('../../assets/images/gallery/IMG-20181006-WA0004.jpg'),
        big: require('../../assets/images/gallery/IMG-20181006-WA0004.jpg')
      },
      {
        small: require('../../assets/images/gallery/IMG-20181006-WA0005.jpg'),
        medium: require('../../assets/images/gallery/IMG-20181006-WA0005.jpg'),
        big: require('../../assets/images/gallery/IMG-20181006-WA0005.jpg')
      },
      {
        small: require('../../assets/images/gallery/IMG-20181006-WA0006.jpg'),
        medium: require('../../assets/images/gallery/IMG-20181006-WA0006.jpg'),
        big: require('../../assets/images/gallery/IMG-20181006-WA0006.jpg')
      },
      {
        small: require('../../assets/images/gallery/IMG-20181006-WA0007.jpg'),
        medium: require('../../assets/images/gallery/IMG-20181006-WA0007.jpg'),
        big: require('../../assets/images/gallery/IMG-20181006-WA0007.jpg')
      },
      {
        small: require('../../assets/images/gallery/IMG-20181006-WA0008.jpg'),
        medium: require('../../assets/images/gallery/IMG-20181006-WA0008.jpg'),
        big: require('../../assets/images/gallery/IMG-20181006-WA0008.jpg')
      },
      {
        small: require('../../assets/images/gallery/IMG-20181006-WA0009.jpg'),
        medium: require('../../assets/images/gallery/IMG-20181006-WA0009.jpg'),
        big: require('../../assets/images/gallery/IMG-20181006-WA0009.jpg')
      },
      {
        small: require('../../assets/images/gallery/IMG-20181006-WA0010.jpg'),
        medium: require('../../assets/images/gallery/IMG-20181006-WA0010.jpg'),
        big: require('../../assets/images/gallery/IMG-20181006-WA0010.jpg')
      },
      {
        small: require('../../assets/images/gallery/IMG-20181006-WA0011.jpg'),
        medium: require('../../assets/images/gallery/IMG-20181006-WA0011.jpg'),
        big: require('../../assets/images/gallery/IMG-20181006-WA0011.jpg')
      },
      {
        small: require('../../assets/images/gallery/IMG-20181006-WA0012.jpg'),
        medium: require('../../assets/images/gallery/IMG-20181006-WA0012.jpg'),
        big: require('../../assets/images/gallery/IMG-20181006-WA0012.jpg')
      },
      {
        small: require('../../assets/images/gallery/IMG-20181006-WA0013.jpg'),
        medium: require('../../assets/images/gallery/IMG-20181006-WA0013.jpg'),
        big: require('../../assets/images/gallery/IMG-20181006-WA0013.jpg')
      },
    ];
  }
}
