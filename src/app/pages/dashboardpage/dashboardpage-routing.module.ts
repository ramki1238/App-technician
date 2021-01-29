import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardpagePage } from './dashboardpage.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardpagePageRoutingModule {}
