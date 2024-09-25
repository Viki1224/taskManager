import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Tasks } from './task.model';
import { TaskService } from '../tasks.service';
import { CardComponent } from '../../shared/card/card.component';
@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [DatePipe, CardComponent],
})
export class TaskComponent {
  @Input({ required: true }) task!: Tasks;

  constructor(private taskService: TaskService) {}
  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
