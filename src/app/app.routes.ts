import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './home/content/content.component';



export const routes: Routes = [
  { path: '', component: HomeComponent, children: [
      { path: 'dashboard', component: ContentComponent },
      { path: 'profile', component: ContentComponent },
      { path: 'settings', component: ContentComponent },
    ]}
];
