import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  projectImages = [
    { src: 'assets/images/Project.png', caption: 'Brown’s Retreat', type: 'Commercial project' },
    { src: 'assets/images/image1.png', caption: 'Kim’s Place', type: 'Institutional project' },
    { src: 'assets/images/image1.jpg', caption: 'Institutional project', type: 'Institutional project' },
    { src: 'assets/images/Rectangle9.png', caption: 'Residential project', type: 'Residential project' },
    { src: 'assets/images/Rectangle9.png', caption: 'Cultural project', type: 'Cultural project' },
    { src: 'assets/images/Rectangle9.png', caption: 'Educational project', type: 'Educational project' },
    { src: 'assets/images/Rectangle9.png', caption: 'Office project', type: 'Office project' },
    { src: 'assets/images/Rectangle9.png', caption: 'Mixed-use project', type: 'Mixed-use project' }
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
