import {Injectable} from '@angular/core';
import {AppService} from './app.service';
import {User} from '../models/User';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  count = 0;
  listUser: User[];
  currentUser: User;
  success: boolean;

  constructor(private appService: AppService, private router: Router) {
    this.listUser = this.appService.getListUser();
  }

  isAuthenticated(): boolean {
    return this.success;
  }

  login(user: User) {
    for (let i = 0; i < this.listUser.length; i++) {
      if (user.name === this.listUser[i].name && user.password === this.listUser[i].password) {
        this.count = i;
        this.success = true;
        this.currentUser = user;
        this.currentUser.status = 'online';
        this.listUser[i].status = 'online';
        break;
      }
    }
    if (this.success) {
      this.router.navigateByUrl('/chat');
    } else {
      alert('Login fail.Please try again');
      this.router.navigateByUrl('/login');
    }
  }

  logout() {
    this.router.navigateByUrl('/login');
  }
}
