import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { UserListComponent } from './user-list/user-list.component';
import { FooterComponent } from './footer/footer.component';
import { SendertravelerdataComponent } from './sendertravelerdata/sendertravelerdata.component';
import { ItemProvidersService } from '../providers/item-providers.service';
import * as moment from 'moment';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SidemenuComponent, UserListComponent, FooterComponent, SendertravelerdataComponent],
  declarations: [SidemenuComponent, UserListComponent, FooterComponent, SendertravelerdataComponent]
})
export class ComponentsModule {

  

}
