import { Injectable,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CommonUiControlService {
  @ViewChild(NavController) nav: NavController;

  constructor(public menuCntrl: MenuController,
    public navCtrl: Router,
    public storage: Storage,
    public alertController: AlertController,
    public loadingController: LoadingController) { }


  async saveTypeOfUser(usertype) {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    await this.storage.set("typeofuser", usertype).then((r)=>{
      console.log(r);
    }).catch((data)=>{
      console.log(data);

    })
    this.presentAlert("Success", "You logged in as " + usertype, ['Ok']);
    this.menuCntrl.enable(true,'custom');
    this.navCtrl.navigateByUrl('/itemdetail',{ replaceUrl: true });
    loading.dismiss();
  }
  async getTypeOfUser():Promise<string> {
    let usertypeis;
    await this.storage.get("typeofuser").then((useris) => {
      usertypeis =useris;
    });
    return usertypeis;
  }
  async getUserName():Promise<string> {
    let usernameis;
    await this.storage.get("name").then((nameis) => {
      usernameis =nameis;
    });
    return usernameis;
  }
  async getUserId():Promise<string> {
    let usertypeis;
    await this.storage.get("userid").then((useris) => {
      usertypeis =useris;
    });
    return usertypeis;
  
  }
  async doLogOut() {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    await this.storage.clear();
    this.menuCntrl.enable(false);
    

    this.navCtrl.navigateByUrl('/loginpage',{ replaceUrl: true });
    loading.dismiss();
  }
  async isLogin() {
    var islogin1 = false;
    await this.storage.get("userid").then((data) => {
      if (data == null || data == '' || data == undefined || data.length == 0) {
        islogin1 = false;
      }
      else {
        islogin1 = true;
      }
    }).catch((err) => {
    });
    return islogin1;
  }
  async isUserExist() {
    var isuserexist1 = false;
    await this.storage.get("typeofuser").then((data) => {
      if (data == null || data == '' || data == undefined || data.length == 0) {
        isuserexist1 = false;
      }
      else {
        isuserexist1 = true;
      }
    }).catch((err) => {
    });
    return isuserexist1;
  }
  async saveLogin(userData) {
    await this.storage.set("logindata", userData).then(() => {
      console.log("success");
      this.navCtrl.navigate(['dashboardpage']);
    }).catch((ex) => {
      console.log(ex);
    })
  }
  async presentAlert(subheader, message, buttons?) {
    const alert = await this.alertController.create({
      subHeader: subheader,
      message: message,
      buttons: ['ok']
    });

    await alert.present();
    
  }
}