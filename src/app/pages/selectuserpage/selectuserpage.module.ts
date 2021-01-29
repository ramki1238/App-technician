import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectuserpagePageRoutingModule } from './selectuserpage-routing.module';

import { SelectuserpagePage } from './selectuserpage.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectuserpagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [SelectuserpagePage]
})
export class SelectuserpagePageModule {}
