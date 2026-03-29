import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Albums } from './albums/albums';
import { AlbumDetail } from './album-detail/album-detail';
import { AlbumPhotos } from './album-photos/album-photos';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'albums', component: Albums },
  { path: 'album/:id', component: AlbumDetail },
  { path: 'albums/:id/photos', component: AlbumPhotos },
];
