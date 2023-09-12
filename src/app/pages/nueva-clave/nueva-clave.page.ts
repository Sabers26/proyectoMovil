import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nueva-clave',
  templateUrl: './nueva-clave.page.html',
  styleUrls: ['./nueva-clave.page.scss'],
})
export class NuevaClavePage implements OnInit {

  usuario={
    clave:''
  }

  constructor(
    private router:Router,
    private alertController:AlertController
  ) { }

  ngOnInit() {
  }

  onSubmit()
  {
      
    this.router.navigate(['/login'])
    this.presentAlert()

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Contraseña Cambiada con exito!",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });

    await alert.present();

 
  }
}
