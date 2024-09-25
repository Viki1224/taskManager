import { Injectable } from '@angular/core';
import { NewTasks } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private userTasks = [
    {
      id: 't1',
      userId: 'u1',
      taskTitle: 'Angular',
      taskCreated: '01-20-2024',
      taskSummary: 'Im learning this from the past one month.',
    },
    {
      id: 't4',
      userId: 'u3',
      taskTitle: 'C++',
      taskCreated: '05-06-2024',
      taskSummary: 'I complete this c++ learining module.',
    },
    {
      id: 't2',
      userId: 'u1',
      taskTitle: 'NodeJs',
      taskCreated: '02-01-2024',
      taskSummary: 'Im learning this from the past three month.',
    },
    {
      id: 't3',
      userId: 'u2',
      taskTitle: 'Javascript',
      taskCreated: '09-07-2024',
      taskSummary: 'Im still learning this things on my own.',
    },
  ];
  constructor() {
    const userTasks = localStorage.getItem('tasks');
    if (userTasks) {
      this.userTasks = JSON.parse(userTasks);
    }
  }
  getUserTask(userId: string) {
    return this.userTasks.filter((user) => user.userId === userId);
  }
  addTask(taskData: NewTasks, userId: string) {
    this.userTasks.push({
      id: new Date().getTime().toString(),
      taskTitle: taskData.title,
      userId: userId,
      taskCreated: taskData.date,
      taskSummary: taskData.summary,
    });
    this.saveTasks();
  }
  removeTask(id: string) {
    this.userTasks = this.userTasks.filter((user) => user.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.userTasks));
  }
}
