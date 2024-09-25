import {
  Component,
  signal,
  computed,
  Input,
  input,
  output,
  Output,
  EventEmitter,
} from '@angular/core';

import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
// type User = {
//   id: String;
//   name: String;
//   avatar: String;
// };

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) users!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();
  get userName() {
    return this.users.name;
  }
  get imagePath() {
    return 'assets/users/' + this.users.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.users.id);
  }
}
// export class UserComponent {
//   avatar = input.required<string>();
//   name = input.required<string>();
//   userName = this.name;
//   // imagePath = computed(() => 'assets/users/' + this.avatar());
//   get imagePath() {
//     return computed(() => 'assets/users/' + this.avatar());
//   }
//   onSelectedUser() {}
// }

// export class UserComponent {
//   selectedUser = DUMMY_USERS[0];
//   constructor() {
//     console.log(this.selectedUser);
//   }
//   get imagePath() {
//     return 'assets/users/' + this.selectedUser.avatar;
//   }
//   get userName() {
//     return this.selectedUser.name;
//   }
//   onSelectedUser() {
//     this.selectedUser =
//       DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
//     console.log(this.selectedUser.name);
//   }
// }

// export class UserComponent {
// selectedUser = signal(DUMMY_USERS[0]);
// imagePaths = computed(() => 'assets/users/' + this.selectedUser().avatar);
// get imagePath() {
//   return 'assets/users/' + this.selectedUser().avatar;
// }

// onSelectedUser() {
//   this.selectedUser.set(
//     DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]
//   );
//   console.log(this.selectedUser());
// }
// }
