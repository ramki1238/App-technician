import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListpagePage } from './user-listpage.page';

const routes: Routes = [
  {
    path: '',
    component: UserListpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListpagePageRoutingModule {}
