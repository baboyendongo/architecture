import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  selectedCategory = 'Commercial';
  categories = ['Commercial', 'Institutional', 'Residential'];
}
