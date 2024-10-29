import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
  imports: [CommonModule, FormsModule],
})
export class PhotoGalleryComponent implements OnInit {
  apiUrl = 'https://picsum.photos/v2/list';
  photos: any[] = [];
  authors: string[] = []; // New array to hold unique authors
  selectedAuthor: string = '';

  async ngOnInit() {
    await this.fetchPhotos();
  }

  async fetchPhotos() {
    try {
      const response = await fetch(this.apiUrl);
      this.photos = await response.json();
      this.populateAuthors(); // Call the function to populate unique authors
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  }

  populateAuthors() {
    const authorSet = new Set(this.photos.map(photo => photo.author));
    this.authors = Array.from(authorSet);
  }

  filteredPhotos() {
    return this.selectedAuthor ? this.photos.filter(photo => photo.author === this.selectedAuthor) : this.photos;
  }
}
