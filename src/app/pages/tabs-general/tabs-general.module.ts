import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsGeneralPageRoutingModule } from './tabs-general-routing.module';

import { TabsGeneralPage } from './tabs-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsGeneralPageRoutingModule
  ],
  declarations: [TabsGeneralPage]
})
export class TabsGeneralPageModule {}
