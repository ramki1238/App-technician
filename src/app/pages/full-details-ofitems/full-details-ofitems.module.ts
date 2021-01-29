import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullDetailsOfitemsPageRoutingModule } from './full-details-ofitems-routing.module';

import { FullDetailsOfitemsPage } from './full-details-ofitems.page';
import { ComponentsModule } from 'src/app/components/components.module';
// import { IonicRatingModule } from 'ionic-rating-component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullDetailsOfitemsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FullDetailsOfitemsPage]
})
export class FullDetailsOfitemsPageModule {}
