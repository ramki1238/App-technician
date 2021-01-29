import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemdetailPage } from './itemdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ItemdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemdetailPageRoutingModule {}
