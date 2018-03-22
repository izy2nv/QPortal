import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/app.authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
private pgMsg: string;
loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.createLoginForm();
  }
  ngOnInit() {
    this.pgMsg = 'Welcome to the Quotes Portal. Please click the button below to continue.';
  }

  triggerLoginService() {
    this.authService.login();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      user: '',
      pw: ''
    });
  }

  proceed() {
    this.authService.login();
  }
}
