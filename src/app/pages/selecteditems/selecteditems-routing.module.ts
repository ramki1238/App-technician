import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecteditemsPage } from './selecteditems.page';

const routes: Routes = [
  {
    path: '',
    component: SelecteditemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecteditemsPageRoutingModule {}
