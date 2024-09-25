import { Component, EventEmitter, Output, Input } from '@angular/core';

import { TaskService } from '../tasks.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-task',
  standalone: true,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  imports: [FormsModule],
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<boolean>();

  addTitle = '';
  addSummary = '';
  addDate = '';
  constructor(private taskService: TaskService) {}
  onClickBtn() {
    this.close.emit(false);
  }
  onSubmit() {
    this.taskService.addTask(
      {
        title: this.addTitle,
        summary: this.addSummary,
        date: this.addDate,
      },
      this.userId
    );
    this.close.emit(false);
  }
}
