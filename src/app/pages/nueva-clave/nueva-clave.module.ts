import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaClavePageRoutingModule } from './nueva-clave-routing.module';

import { NuevaClavePage } from './nueva-clave.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaClavePageRoutingModule,
    ComponentsModule
  ],
  declarations: [NuevaClavePage]
})
export class NuevaClavePageModule {}
