import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  projectImages = [
    { src: 'assets/images/Project.png', caption: 'Commercial project' },
    { src: 'assets/images/image1.png', caption: 'Modern Tower' },
    { src: 'assets/images/project2.jpg', caption: 'Institutional project' },
    { src: 'assets/images/Rectangle9.png', caption: 'Residential project' },
    { src: 'assets/images/Rectangle9.png', caption: 'Cultural project' },
    { src: 'assets/images/Rectangle9.png', caption: 'Educational project' },
    { src: 'assets/images/Rectangle9.png', caption: 'Office project' },
    { src: 'assets/images/Rectangle9.png', caption: 'Mixed-use project' }
  ];
  currentIndex = 0;
  intervalId: any;

  visibleCount = 3;

  get visibleImages() {
    const images = [];
    for (let i = 0; i < this.visibleCount; i++) {
      images.push(this.projectImages[(this.currentIndex + i) % this.projectImages.length]);
    }
    return images;
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 4000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.projectImages.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.projectImages.length) % this.projectImages.length;
  }
}
