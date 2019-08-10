import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../service/app.service';
import {Message} from '../../../models/Message';
import {User} from '../../../models/User';
import {AuthService} from '../../../service/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listMessage: Message[] = [];

  constructor(private appService: AppService,
              private authService: AuthService) {
    this.listMessage = this.appService.getListMessage();
  }

  ngOnInit() {
  }

  send(content: string) {
    const message = new Message();
    message.sender = this.authService.currentUser;
    message.time = new Date().getHours();
    message.content = content;
    this.appService.addMessage(message);
    this.appService.popup();
  }

}
