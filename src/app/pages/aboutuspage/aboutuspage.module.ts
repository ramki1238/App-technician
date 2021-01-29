import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutuspagePageRoutingModule } from './aboutuspage-routing.module';

import { AboutuspagePage } from './aboutuspage.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { DashboardpagePageModule } from '../dashboardpage/dashboardpage.module';
import { DashboardpagePage } from '../dashboardpage/dashboardpage.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutuspagePageRoutingModule,
    ComponentsModule,DashboardpagePageModule
  ],
  declarations: [AboutuspagePage]
})
export class AboutuspagePageModule {}
