import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
@Component({
  selector: 'app-welcomeslider',
  templateUrl: './welcomeslider.page.html',
  styleUrls: ['./welcomeslider.page.scss'],
})
export class WelcomesliderPage implements OnInit {
  silderItems = ['screen-1', 'screen-2', 'screen-3'];
  slideOpts = {
    initialSlide: 2,
    speed: 10
  };
  constructor(private navCtrl: Router,
    private commonuiCtrl: CommonUiControlService,
    private menuctrl:MenuController) { }
  ngOnInit() {
    this.menuctrl.enable(false);
  }

  loginScreenOpen(event): void {
    if (event.target.alt == "screen-3") {
      this.navCtrl.navigate(['loginpage']);
    }
  }


}
