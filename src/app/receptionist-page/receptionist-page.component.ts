import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-receptionist-page',
  templateUrl: './receptionist-page.component.html',
  styleUrls: ['./receptionist-page.component.css']
})
export class ReceptionistPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
  }

}
