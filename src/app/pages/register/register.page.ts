import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registro={
    nombre:'',
    apellido:'',
    email:'',
    password:'',
    password2:''
  }

  constructor(
    private router:Router,
    private alertController:AlertController
    ) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.router.navigate(['/home'])
  }

  irLogin(){
    this.router.navigate(['/login'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Algun campo se encuentra vacio",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });

    await alert.present();}

}
