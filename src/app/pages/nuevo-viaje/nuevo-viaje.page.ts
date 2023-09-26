import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-viaje',
  templateUrl: './nuevo-viaje.page.html',
  styleUrls: ['./nuevo-viaje.page.scss'],
})
export class NuevoViajePage implements OnInit {

  viaje={
    destino:'',
    precio:'',
    dispo:'',
    patente:''
  }


  constructor(
    private router:Router,
    private alertController:AlertController
  ) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.router.navigate(['/tabs-general/mapa'])
    this.presentAlert()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Viaje ingresado correctamente",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });

    await alert.present();

  }

}
