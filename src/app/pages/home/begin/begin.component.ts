import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';

interface beginImages {
  imgSrc: string;
}
@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.scss'],
})
export class BeginComponent implements OnInit {
  beginImages: beginImages[] = [];
  indicator = true;
  selectedIndex = 0;
  autoSlide = true;
  slideInterval = 3000;
  constructor() {}

  ngOnInit(): void {
    this.beginImages = [
      {
        imgSrc:
          'https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg',
      },
      {
        imgSrc:
          'https://media.istockphoto.com/id/1351571961/photo/looking-directly-up-at-the-skyline-of-the-financial-district-in-central-london.jpg?b=1&s=170667a&w=0&k=20&c=ScoPcmVztzvi771qPgGSvhA50WDt7gOM7361Ei0ODww=',
      },
      {
        imgSrc:
          'https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?b=1&s=170667a&w=0&k=20&c=Mq9Qm3UjzrqNKs6HFOFNJps-P9z4ijK1aTx1nP4gEes=',
      },
      {
        imgSrc:
          'https://media.istockphoto.com/id/1135793300/photo/3d-rendering-of-corporate-buildings-with-sunlight.jpg?s=612x612&w=0&k=20&c=SSSn8Bv0YF9IMfIRALerDpwgpLqdLZ2A0X4K3akVqLk=',
      },
    ];

    if (this.autoSlide) {
      this.autSliding();
    }
  }
  onNextClick() {
    if (this.selectedIndex === this.beginImages.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
  autSliding() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(index: number) {
    this.selectedIndex = index;
  }
}
