import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContentComponent implements OnInit {
  items = ['Кактус', 'Банан', 'Гуава', 'Ківі'];
  @Input() content: string = 'Оберіть розділ';

  data: any[] = [];
  error: string = '';
  postSuccess = false;

  newData = {
    title: '',
    body: ''
  };

  private apiService = inject(ApiService);

  ngOnInit(): void {
    this.fetchData(); // Завантажуємо дані з API при ініціалізації
  }

  fetchData(): void {
    this.apiService.getData().subscribe({
      next: (res) => {
        this.data = res;
        this.error = '';
      },
      error: (err) => {
        this.error = err.message;
      }
    });
  }

  submitForm(): void {
    const newEntry = { ...this.newData };

    // Надсилаємо дані на сервер
    this.apiService.postData(newEntry).subscribe({
      next: () => {
        this.data.unshift(newEntry); // Додаємо новий запис на початок
        this.postSuccess = true;
        this.error = '';
        this.newData = { title: '', body: '' };
      },
      error: (err) => {
        this.error = err.message;
      }
    });
  }
}
