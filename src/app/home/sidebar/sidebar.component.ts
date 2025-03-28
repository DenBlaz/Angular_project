import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class SidebarComponent {
  isSidebarVisible = true;

  toggleSidebar(){
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  @Output() contentChange = new EventEmitter<string>();

  changeContent(content: string) {
    this.contentChange.emit(content);
  }

}
