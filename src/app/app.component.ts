import { Component } from '@angular/core';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-photo-gallery></app-photo-gallery>',
  imports: [PhotoGalleryComponent],
})
export class AppComponent {
  title = 'PublicApiProject2';
}