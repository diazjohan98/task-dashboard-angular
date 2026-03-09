import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component'; // 1. Importar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent],
  template: `<app-task-list></app-task-list>`,
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'task-dashboard';
}
