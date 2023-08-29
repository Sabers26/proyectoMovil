import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { LoginPageRoutingModule } from '../login/login-routing.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  public irLogin()
  {
      console.log("Fuiste al login!");
      this.router.navigate(['login']);

  }

}
