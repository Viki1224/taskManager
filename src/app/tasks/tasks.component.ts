import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTasks } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) userNm?: string;
  isAddingTask = false;

  constructor(private taskService: TaskService) {}
  get onTaskFilter() {
    return this.taskService.getUserTask(this.id);
  }

  onStartAddTask() {
    return (this.isAddingTask = true);
  }
  onCloseTask(val: boolean) {
    this.isAddingTask = val;
  }
}
