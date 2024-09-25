export interface Tasks {
  id: string;
  userId: string;
  taskTitle: string;
  taskCreated: string;
  taskSummary: string;
}

export interface NewTasks {
  title: string;
  summary: string;
  date: string;
}
