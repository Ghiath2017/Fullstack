import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}

  loginData = {
    email: "",
    password:""
  };

ngOnInit(): void {
  }

  login() {
    this.auth.login(this.loginData);
  }
}
