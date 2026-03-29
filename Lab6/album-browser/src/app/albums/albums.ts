import { Component, OnInit } from '@angular/core';
import { signal } from '@angular/core';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums = signal<Album[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  constructor(private readonly albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums.set(albums);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Unable to load albums. Please try again!');
        this.isLoading.set(false);
      },
    });
  }

  onDelete(album: Album, event: Event): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(album.id).subscribe({
      next: () => {
        this.albums.set(this.albums().filter((item) => item.id !== album.id));
      },
      error: () => {
        this.error.set('Unable to delete album. Please try agian!');
      },
    });
  }
}
