import { Component } from '@angular/core';
import { AuthService } from './services/app.authService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) {
    authService.handleAuthentication();
  }
}
