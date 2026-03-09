import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Agregamos ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { name: '', content: '' };

  isEditing: boolean = false;
  currentTaskId?: number;

  // 2. Inyectamos el ChangeDetectorRef (le pondremos el apodo 'cdr')
  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data || [];

        // 3. ¡EL TOQUE MÁGICO! Obligamos a Angular a actualizar el HTML inmediatamente
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('❌ Error al cargar tareas:', err);
      },
    });
  }

  saveTask(): void {
    if (this.newTask.name && this.newTask.content) {
      if (this.isEditing && this.currentTaskId) {
        this.taskService.updateTask(this.currentTaskId, this.newTask).subscribe(() => {
          this.loadTasks();
          this.resetForm();
        });
      } else {
        this.taskService.createTask(this.newTask).subscribe(() => {
          this.loadTasks();
          this.resetForm();
        });
      }
    }
  }

  editTask(task: Task): void {
    this.isEditing = true;
    this.currentTaskId = task.id;
    this.newTask = { name: task.name, content: task.content };
  }

  resetForm(): void {
    this.isEditing = false;
    this.currentTaskId = undefined;
    this.newTask = { name: '', content: '' };
  }

  deleteTask(id: number | undefined): void {
    if (id) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.loadTasks();
      });
    }
  }
}
