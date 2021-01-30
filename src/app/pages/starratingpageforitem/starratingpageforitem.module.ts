import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarratingpageforitemPageRoutingModule } from './starratingpageforitem-routing.module';

import { StarratingpageforitemPage } from './starratingpageforitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarratingpageforitemPageRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [StarratingpageforitemPage]
})
export class StarratingpageforitemPageModule {}
