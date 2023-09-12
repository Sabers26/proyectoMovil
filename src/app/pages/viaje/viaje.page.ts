import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  constructor(
    private router:Router,
    private alertController:AlertController
  ) { }

  ngOnInit() {
  }

  aceptarViaje(){
    this.router.navigate(['/tabs-general/home'])
    this.presentAlert()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Viaje aceptado con exito",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });

    await alert.present();

 
  }

}
