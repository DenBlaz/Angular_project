import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ContentComponent] // Додаємо вкладені компоненти
})
export class HomeComponent {
  contentText = 'Більше...';

  updateContent(newContent: string) {
    this.contentText = newContent;
  }
}
