import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  userList = DUMMY_USERS;
  dummyId?: string;
  get userThatEmitted() {
    return this.userList.find((user) => user.id === this.dummyId);
  }
  onSelectUser(e: string) {
    this.dummyId = e;
  }
}
