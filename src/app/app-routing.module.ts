import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ComponentsModule} from './components/components.module'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'selecteditems',
    pathMatch: 'full'
  },
  {
    path: 'welcomeslider',
    loadChildren: () => import('./pages/welcomeslider/welcomeslider.module').then( m => m.WelcomesliderPageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./pages/loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'selectuserpage',
    loadChildren: () => import('./pages/selectuserpage/selectuserpage.module').then( m => m.SelectuserpagePageModule)
  },
  {
    path: 'dashboardpage',
    loadChildren: () => import('./pages/dashboardpage/dashboardpage.module').then( m => m.DashboardpagePageModule)
  },
  {
    path: 'aboutuspage',
    loadChildren: () => import('./pages/aboutuspage/aboutuspage.module').then( m => m.AboutuspagePageModule)
  },
  {
    path: 'userlistpage',
    loadChildren: () => import('./pages/user-listpage/user-listpage.module').then( m => m.UserListpagePageModule)
  },
  {
    path: 'userdetails',
    loadChildren: () => import('./pages/user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'contactuspage',
    loadChildren: () => import('./pages/contactuspage/contactuspage.module').then( m => m.ContactuspagePageModule)
  },
  {
    path: 'itemdetail',
    loadChildren: () => import('./pages/itemdetail/itemdetail.module').then( m => m.ItemdetailPageModule)
  },
  {
    path: 'registerpage',
    loadChildren: () => import('./pages/registerpage/registerpage.module').then( m => m.RegisterpagePageModule)
  },
  {
    path: 'selecteditems',
    loadChildren: () => import('./pages/selecteditems/selecteditems.module').then( m => m.SelecteditemsPageModule)
  },
  {
    path: 'full-details-ofitems',
    loadChildren: () => import('./pages/full-details-ofitems/full-details-ofitems.module').then( m => m.FullDetailsOfitemsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ComponentsModule
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
