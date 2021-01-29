import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
import { ItemProvidersService } from 'src/app/providers/item-providers.service';

@Component({
  selector: 'app-selecteditems',
  templateUrl: './selecteditems.page.html',
  styleUrls: ['./selecteditems.page.scss'],
})
export class SelecteditemsPage implements OnInit {
  userid: string;
  typeOfuser: string;
  typeOfuserDataNeed: string;
  hidden: boolean = false;
  itemsListData: UserDatabase
  constructor(private itemprovider: ItemProvidersService,
    private commonUictrl: CommonUiControlService,
    public loadingController: LoadingController,) { }


  ngOnInit() {
  }
  async getuserData() {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    await this.commonUictrl.getUserId().then((user) => {
      this.userid = user;
    });
    await this.commonUictrl.getTypeOfUser().then((user) => {
      if (user != undefined) {
        this.typeOfuser = user;
        switch (this.typeOfuser.toLowerCase()) {
          case 'traveler':
            this.typeOfuserDataNeed = "sender";
            break;
          case 'sender':
            this.typeOfuserDataNeed = "traveler";
            break;
        }

      }
      loading.dismiss();
      this.itemprovider.getSelectedList(this.typeOfuserDataNeed.toLowerCase(), this.userid).subscribe((selectlistres) => {
        console.log(selectlistres);
        if(selectlistres.status === "0"){
          this.hidden = true;
        }else{
          this.hidden = false;
          this.itemsListData = selectlistres;
        }
      });
    });
  
  }

  ionViewWillEnter() {
    this.getuserData();
}
 

}
