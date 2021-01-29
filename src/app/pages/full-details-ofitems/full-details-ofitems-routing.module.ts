import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullDetailsOfitemsPage } from './full-details-ofitems.page';

const routes: Routes = [
  {
    path: '',
    component: FullDetailsOfitemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullDetailsOfitemsPageRoutingModule {}
