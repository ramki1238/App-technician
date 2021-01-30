import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarratingpageforitemPage } from './starratingpageforitem.page';

const routes: Routes = [
  {
    path: '',
    component: StarratingpageforitemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarratingpageforitemPageRoutingModule {}
