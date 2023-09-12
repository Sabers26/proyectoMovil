import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  constructor(
    private router:Router,
    private alertController:AlertController
  ) { }

  ngOnInit() {
  }

  nuevoViaje(){
    this.router.navigate(['/tabs-general/nuevo-viaje'])
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
