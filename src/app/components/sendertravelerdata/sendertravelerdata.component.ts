import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
import { ItemProvidersService } from 'src/app/providers/item-providers.service';

@Component({
  selector: 'app-sendertravelerdata',
  templateUrl: './sendertravelerdata.component.html',
  styleUrls: ['./sendertravelerdata.component.scss'],
})
export class SendertravelerdataComponent implements OnInit {
  @Input('itemsData') itemsData?
  @Input('radioselecbtns') radioselecbtns?
  @Input('bottomoptions') bottomoptions?
  @Output() deleteSelectedItemEvent=new EventEmitter(); 
  isSender = false;
  constructor(private itemprovider: ItemProvidersService,
    private commonUictrl: CommonUiControlService,
    public loadingController: LoadingController) {

  }

  ngOnInit() {

  }



 async deleteSelectedItem(itemid) {
    console.log("deleteThisItem" + itemid);
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    this.itemprovider.deleteSelectedItem(itemid).subscribe((data) => {
      console.log(data);
      this.commonUictrl.presentAlert("Success","Deleted successfully",['ok']);
      loading.dismiss();
      // if(data.status == "1")
      // {
      //   this.commonUictrl.presentAlert("Success","Deleted successfully",['ok']);
      // loading.dismiss();
      // }
      // else{
      //   this.commonUictrl.presentAlert("Failed","Deleted unsuccessfull",['ok']);
      //   loading.dismiss();
      // }
      this.deleteSelectedItemEvent.next();
    });
  }

   viewFullPagewithData(itemData){
    console.log(itemData);
    let navigationExtras: NavigationExtras = {
      state: {
        user: itemData
      }
    };
    this.commonUictrl.navCtrl.navigate(['full-details-ofitems'],navigationExtras);
  }

}
