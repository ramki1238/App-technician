import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomesliderPageRoutingModule } from './welcomeslider-routing.module';

import { WelcomesliderPage } from './welcomeslider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomesliderPageRoutingModule
  ],
  declarations: [WelcomesliderPage]
})
export class WelcomesliderPageModule {}
