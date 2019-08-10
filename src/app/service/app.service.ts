import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Message} from '../models/Message';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  listUser: User[] = [
    {id: 0, name: 'Thao', password: '123', status: 'offline', avatar: 'assets/head-659651_960_720.png'},
    {id: 1, name: 'Dat', password: '123', status: 'offline', avatar: 'assets/head-659651_960_720.png'},
    {id: 2, name: 'Anh', password: '123', status: 'offline', avatar: 'assets/head-659651_960_720.png'},
    {id: 3, name: 'Duc', password: '123', status: 'offline', avatar: 'assets/head-659651_960_720.png'},
  ];

  listMessage: Message[] = [
    {sender: this.listUser[0], content: 'Hello!', time: new Date().getHours()},
    {sender: this.listUser[1], content: 'Hello!', time: new Date().getHours()},
    {sender: this.listUser[2], content: 'Hello!', time: new Date().getHours()},
    {sender: this.listUser[3], content: 'Hello!', time: new Date().getHours()}
  ];

  constructor() {
  }

  getListUser() {
    return this.listUser;
  }

  getListMessage() {
    return this.listMessage;
  }

  addMessage(message: Message) {
    this.listMessage.push(message);
  }

  popup() {
    $(document).ready(
      () => {
        const height = document.getElementById('all-message').scrollHeight;
        $('#all-message').scrollTop(height);
      });
  }
}
