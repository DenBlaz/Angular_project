import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ContentComponent {
  items = ['Кактус', 'Банан', 'Гуава', 'Ківі'];
  @Input() content: string = 'Оберіть розділ';
}
