import { Component } from '@angular/core';
export class User {
  id: number;
  name: string;
  phone: string;
  email: string;
}
const USERS: User[] = [
  { id: 1, name: 'Nasser Al-Zughaibi', phone: '703-111-1111', email: 'nalzugha@gmu.edu' },
  { id: 2, name: 'Javier Argandona', phone: '703-222-2222', email: 'argandonajavier10@gmail.com' },
  { id: 3, name: 'Aparna Giare', phone: '703-333-3333', email: 'agiare@gmu.edu' },
  { id: 4, name: 'Sohaila Hamidzada', phone: '703-444-4444', email: 'shamidza@gmu.edu' },
  { id: 5, name: 'Mansoor Spingher', phone: '703-555-5555', email: 'mspinghe@gmu.edu' }
];
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>The List of Users</h2>
    <ul class="users">
      <li *ngFor="let user of users"
        [class.selected]="user === selectedUser"
        (click)="onSelect(user)">
        <span class="badge">{{user.id}}</span> {{user.name}}
      </li>
    </ul>
    <div *ngIf="selectedUser">
      <h2>{{selectedUser.name}}'s Details</h2>
      <div><label><b>ID Number:</b> </label>{{selectedUser.id}}</div>
      <div>
        <label><b>Name:</b> </label>{{selectedUser.name}}</div>
      <div>
        <label><b>Phone Number:</b> </label>{{selectedUser.phone}}</div>
      <div>
        <label><b>Email Address:</b> </label>{{selectedUser.email}}</div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .users {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .users li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .users li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .users li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .users .text {
      position: relative;
      top: -3px;
    }
    .users .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'The Users of Prescription Tracker';
  users = USERS;
  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }
}