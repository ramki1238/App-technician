import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  } from '@ionic/angular'; 
import { CommonUiControlService } from '../../providers/common-ui-control.service';
@Component({
  selector: 'app-selectuserpage',
  templateUrl: './selectuserpage.page.html',
  styleUrls: ['./selectuserpage.page.scss'],
})
export class SelectuserpagePage implements OnInit {

  constructor(private comnuiCtrl: CommonUiControlService,public router: Router) { }

  ngOnInit() {
    this.comnuiCtrl.menuCntrl.enable(false);
  }

  async redirectWithUserType(userType) {
    await this.comnuiCtrl.saveTypeOfUser(userType);
  }
  backScreen(){
    this.router.navigate(['loginpage']);
  }
}
