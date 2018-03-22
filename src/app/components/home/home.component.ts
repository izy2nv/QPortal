import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/app.authService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AppService, AuthService]
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService, private authService: AuthService) { }

  ngOnInit() {
    this.retrieveAllProds();
  }
  retrieveAllProds() {
    this.appService.getAllProducts().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log('an error occurred');
      }
    );
  }
  logout() {
    this.authService.logout();
  }
}
