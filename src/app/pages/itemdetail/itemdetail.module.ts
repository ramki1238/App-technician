import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemdetailPageRoutingModule } from './itemdetail-routing.module';

import { ItemdetailPage } from './itemdetail.page';
import { ModelsModule } from 'src/app/models/models.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemdetailPageRoutingModule,
    ModelsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [ItemdetailPage]
})
export class ItemdetailPageModule {}
