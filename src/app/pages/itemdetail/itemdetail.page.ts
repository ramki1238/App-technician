import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
import { ItemProvidersService } from '../../providers/item-providers.service';
import * as moment from 'moment';
@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.page.html',
  styleUrls: ['./itemdetail.page.scss'],
})
export class ItemdetailPage implements OnInit {

  statesdata: StatesDatabase[];
  districtsata: DistrictDatabase[];
  citysdata: CityDatabase[];

  fromstatesData: StatesDatabase[];
  fromDistrictData: DistrictDatabase[];
  fromcityData: CityDatabase[];

  tostatesData: StatesDatabase[];
  toDistrictData: DistrictDatabase[];
  tocityData: CityDatabase[];

  travelerData: FormGroup;
  senderData: FormGroup;
  divTag = false;
  pagetitle="Add Item";
  usertype: string;
  userid: string;
  constructor(public itmprservices: ItemProvidersService, private formbuilder: FormBuilder, private commonUictrl: CommonUiControlService,
    private loadingController: LoadingController) {
    this.commonUictrl.menuCntrl.enable(true,'custom');

    this.commonUictrl.getTypeOfUser().then((user) => {
      this.travelerData.value.type = user;
      this.usertype = user;
      if (user == "SENDER") {
        this.divTag = true;
        this.pagetitle="Add item";
      } else {
        this.divTag = false;
        this.pagetitle="Add journy";

      }
    });
    this.travelerData = this.formbuilder.group({
      type: ['traveler'],
      userid: [''],
      fromstateid: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      fromdist: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      fromcity: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      fromarea: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      tostate: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      todist: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      tocity: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      toarea: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      dateoftravel: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      timeoftravel: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      role: ['active'],
      datecreated: [moment(new Date()).format("YYYY-MM-DD  h:mm:ss")],
      dateupdate: [moment(new Date()).format("YYYY-MM-DD  h:mm:ss")],
    });
    this.senderData = this.formbuilder.group({
      type: ['sender'],
      userid: ['13'],
      fromstateid: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      fromdist: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      fromcity: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      fromarea: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      tostate: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      todist: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      tocity: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      toarea: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      itemtype: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      packing: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      weight: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      amount: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      dateoftravel: ['', Validators.compose([Validators.required])],
      timeoftravel: ['', Validators.compose([Validators.required])],
      role: ['active'],
      datecreated: [moment(new Date()).format("YYYY-MM-DD  h:mm:ss")],
      dateupdate: [moment(new Date()).format("YYYY-MM-DD  h:mm:ss")],
    });
    this.commonUictrl.getUserId().then((user) => {
      this.travelerData.value.userid = user;
      this.senderData.value.userid = user;
      this.userid = user;
    });
  }
  ngOnInit() {
    this.getStatesData();
  }
  getStatesData() {
    this.itmprservices.getStatesData().subscribe(data => {
      this.statesdata = data.body;
      this.fromstatesData = this.tostatesData = this.statesdata;

    });
    this.itmprservices.getDistrictData().subscribe(data => this.districtsata = data.body);
    this.itmprservices.getCityData().subscribe(data => this.citysdata = data.body);
  }

  dataChange(area, event) {
    let selectedValueis = event.target.value;
    console.log(selectedValueis);
    console.log(this.districtsata);
    console.log(this.fromDistrictData);

    switch (area) {
      case 'fromstate':
        this.fromDistrictData = null;;
        this.fromcityData = null;
        this.fromDistrictData = this.districtsata.filter(resdata => resdata.stateid == selectedValueis);
        break;
      case 'fromdistrict':
        this.fromcityData = null;
        this.fromcityData = this.citysdata.filter(resdata => resdata.distid == selectedValueis);
        break;
      case 'tostate':
        this.toDistrictData = null;;
        this.tocityData = null;
        this.toDistrictData = this.districtsata.filter(resdata => resdata.stateid == selectedValueis);
        break;
      case 'todistrict':
        this.tocityData = null;
        this.tocityData = this.citysdata.filter(resdata => resdata.distid == selectedValueis);
        break;
    }
  }
  async saveTravelerDetails() {
    this.travelerData.value.userid = this.userid;
    this.travelerData.value.timeoftravel = moment(this.travelerData.value.timeoftravel, 'h:mm').format('h:mm').toString();
    this.travelerData.value.dateoftravel = moment(this.travelerData.value.dateoftravel, 'YYYY-MM-DD').format('YYYY-MM-DD').toString();
    console.log(this.travelerData.value);
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    loading.present();
    if (this.travelerData.valid) {
      this.itmprservices.saveItemsData(this.travelerData.value).subscribe((result) => {
        console.log(result);
        if (loading) loading.dismiss();
        this.commonUictrl.presentAlert("Success", "Your item data has been saved")
        this.commonUictrl.navCtrl.navigate(['dashboardpage']);
      });
      if (loading) loading.dismiss();
    }
    else {
      this.commonUictrl.presentAlert("Alert", "Please enter mandatory fields");
      if (loading) loading.dismiss();

    }
  }
  async saveSenderDetails() {
    this.senderData.value.userid = this.userid;
    this.senderData.value.timeoftravel = moment(this.senderData.value.timeoftravel, 'h:mm').format('h:mm').toString();
    this.senderData.value.dateoftravel = moment(this.senderData.value.dateoftravel, 'YYYY-MM-DD').format('YYYY-MM-DD').toString();
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    console.log(this.senderData.value);
    loading.present();
    if (this.senderData.valid) {
      this.itmprservices.saveItemsData(this.senderData.value).subscribe((result) => {
        console.log(result);
        console.log(result.status);
        if (loading) loading.dismiss();
        this.commonUictrl.presentAlert("Success", "Your item data has been saved")
        this.commonUictrl.navCtrl.navigate(['dashboardpage']);
      });
      if (loading) loading.dismiss();
    }
    else {
      this.commonUictrl.presentAlert("Alert", "Please enter mandatory fields");
      if (loading) loading.dismiss();
    }
  }
}

