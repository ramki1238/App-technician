import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomesliderPage } from './welcomeslider.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomesliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomesliderPageRoutingModule {}
