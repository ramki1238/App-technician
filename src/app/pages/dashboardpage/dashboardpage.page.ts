import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
import { ItemProvidersService } from 'src/app/providers/item-providers.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.page.html',
  styleUrls: ['./dashboardpage.page.scss'],
})
export class DashboardpagePage implements OnInit {
  pagetitle = "Users List";
  hidden: boolean = false;
  DataStatus: number;
  userid: string;
  typeOfuser: string;
  typeOfuserDataNeed: string;
  todaydate = moment(new Date(), 'YYYY-MM-DD').format("YYYY-MM-DD");
  itemsListData: UserDatabase
  selectedData: FormGroup
  constructor(public menu: MenuController,
    private itemprovider: ItemProvidersService,
    private commonUictrl: CommonUiControlService,
    public loadingController: LoadingController,
    private formbuilder: FormBuilder) {
    this.commonUictrl.menuCntrl.enable(true, 'custom');
    if (!this.commonUictrl.menuCntrl.isEnabled) this.commonUictrl.menuCntrl.enable(true);
    this.selectedData = this.formbuilder.group({
      usertype: [''],
      senderid: [''],
      travelerid: [''],
      role: ['active'],
      itemid: ['', Validators.compose([Validators.required])],
      datecreated: [moment(new Date()).format("YYYY-MM-DD  h:mm:ss")],
      dateupdated: [moment(new Date()).format("YYYY-MM-DD  h:mm:ss")]

    });
  }

  ngOnInit() {
    this.getuserData();
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
      this.getMainItemsStatus();
      loading.dismiss();
    });
  }
  async getMainItemsStatus() {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    this.itemprovider.getMainItemsStatus(this.typeOfuserDataNeed, this.todaydate).subscribe(data => {
      if (data.status == 1) {
        this.getUsersList();
        loading.dismiss();
      }
      else {
        this.hidden = true;
        loading.dismiss();
      }
    });
  }
  async getUsersList() {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    this.itemprovider.getUsersList(this.typeOfuserDataNeed, this.todaydate).subscribe(data => {
      console.log(data);
      if (data != null)
        this.itemsListData = data;
    });
    loading.dismiss();
  }
  doRefresh(event) {
    this.getuserData();
    event.target.complete();
  }
  async saveSenderDetails() {
    this.selectedData.value.usertype = this.typeOfuserDataNeed;
    this.selectedData.value.senderid = this.userid;
    this.selectedData.value.travelerid = this.userid;

    console.log(this.selectedData.value);
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    console.log(this.selectedData.value.itemid);
    if (this.selectedData.value.itemid == "") {

      this.commonUictrl.presentAlert("Alert", "Please select any item", ["ok"]);
      loading.dismiss();
    }
    else {
      this.itemprovider.saveSelectedItems(this.selectedData.value).subscribe((res) => {
        console.log(res);
        if (res != null) {
          if (res.status == 1) {
            this.commonUictrl.presentAlert("Success", "Item added successfully", ["ok"]);
            loading.dismiss();
          }
        }
      });

    }
  }
  radioGroupChange(event) {
    this.selectedData.value.itemid = '' + event.detail.value;
  }
}
