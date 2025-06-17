import { Component } from '@angular/core';

@Component({
  selector: 'app-unity-platformer',
  templateUrl: './unity-platformer.component.html',
  styleUrls: ['./unity-platformer.component.css']
})
export class UnityPlatformerComponent {
  images = [
    'assets/img/work/2020/unity-platformer-k/unity-platformer-k-1.jpg',
    'assets/img/work/2020/unity-platformer-k/unity-platformer-k-2.jpg',
    'assets/img/work/2020/unity-platformer-k/unity-platformer-k-3.jpg'
  ];
  currentIndex = 0;

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}

