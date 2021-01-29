import { Component, OnInit } from '@angular/core';
import {CommonUiControlService} from '../../providers/common-ui-control.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private commonulCtrl:CommonUiControlService) { }

  ngOnInit() {}

  TabBtnClick(pageis){
    this.commonulCtrl.navCtrl.navigate([pageis]);
  }
}
