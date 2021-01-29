import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutuspagePage } from './aboutuspage.page';

const routes: Routes = [
  {
    path: '',
    component: AboutuspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutuspagePageRoutingModule {}
