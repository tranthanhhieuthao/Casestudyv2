import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Message} from '../models/Message';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  listUser: User[] = [
    {id: 0, name: 'Tran Hieu', password: '123', status: 'Offline', avatar: 'assets/head-659651_960_720.png'},
    {id: 1, name: 'Dao Dat', password: '123', status: 'Offline', avatar: 'assets/head-659651_960_720.png'},
    {id: 2, name: 'Dinh Dat', password: '123', status: 'Offline', avatar: 'assets/head-659651_960_720.png'},
    {id: 3, name: 'Tran Thao', password: '123', status: 'Offline', avatar: 'assets/head-659651_960_720.png'},
    {id: 4, name: 'Linh Chi', password: '123', status: 'Offline', avatar: 'assets/head-659651_960_720.png'},
    {id: 5, name: 'Xuan Hai', password: '123', status: 'Offline', avatar: 'assets/head-659651_960_720.png'},
  ];

  listMessage: Message[] = [
    {sender: this.listUser[0], content: 'Hello!', time: new Date().getHours()},
    {sender: this.listUser[1], content: 'Uong bia khong nhi?!', time: new Date().getHours()},
    {sender: this.listUser[2], content: 'Cuoi tuan quay thoi!', time: new Date().getHours()},
    {sender: this.listUser[3], content: 'yeah!!!!!!!', time: new Date().getHours()},
    {sender: this.listUser[5], content: 'Lo hoc di con!!!!!!!', time: new Date().getHours()}
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
