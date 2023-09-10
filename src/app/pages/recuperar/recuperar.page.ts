import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  usuario={
    correo:''
  }

  constructor(
    private router:Router,
    private alertController:AlertController
  ) { }

  ngOnInit() {
  }

  irRegister(){
    this.router.navigate(['/register'])
  }

  onSubmit()
  {
    if (this.usuario.correo=="admin@admin.cl"){
      this.router.navigate(['/nueva-clave'])
    }
    else{
      this.presentAlert()
    }

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Correo no existente",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });

    await alert.present();

 
  }

}
