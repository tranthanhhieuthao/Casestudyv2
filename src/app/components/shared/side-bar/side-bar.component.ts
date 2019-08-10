import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {AppService} from '../../../service/app.service';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  listUser: User[];
  currenUser: User;

  constructor(private appService: AppService, private authService: AuthService) {
    this.listUser = this.appService.getListUser();
    this.currenUser = this.authService.currentUser;
    this.appService.popup();
  }

  ngOnInit() {
  }

}
