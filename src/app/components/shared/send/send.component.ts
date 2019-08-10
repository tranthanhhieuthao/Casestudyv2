import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from '../../../models/Message';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  @Output()
  press = new EventEmitter<string>();
  content: string;

  constructor() {
  }

  ngOnInit() {
  }

  doSend() {
    this.press.emit(this.content);
    this.content = '';
  }
}
