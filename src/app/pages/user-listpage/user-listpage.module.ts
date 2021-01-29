import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserListpagePageRoutingModule } from './user-listpage-routing.module';

import { UserListpagePage } from './user-listpage.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserListpagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [UserListpagePage]
})
export class UserListpagePageModule {}
