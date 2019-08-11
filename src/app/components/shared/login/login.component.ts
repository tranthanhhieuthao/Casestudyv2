import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.user = new User();
    this.user.id = Math.round(Math.random() * 100);
    this.user.avatar = 'assets/head-659651_960_720.png';
    this.user.status = 'offline';
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password: new FormControl('', [Validators.required, Validators.minLength(3)])
      }
    );
  }

  login() {
    this.authService.login(this.user);
  }
}
