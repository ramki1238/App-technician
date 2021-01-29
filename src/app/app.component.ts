import { Component,ViewChildren,QueryList } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { MenuController, Platform,AlertController, IonRouterOutlet  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonUiControlService } from '../app/providers/common-ui-control.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  LoginName:string="";
  LoginUsertype:string="";

  constructor(
    private location: Location,
    private network: Network,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController,
    private commonuiCtrl: CommonUiControlService,
    public alertCtrl: AlertController,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    
    this.commonuiCtrl.getTypeOfUser().then((user) => {
      this.LoginUsertype=user;
    });
    this.commonuiCtrl.getUserName().then((user) => {
      this.LoginName=user;
    });

    this.platform.ready().then(() => {
      this.network.onDisconnect().subscribe((res) => {
        this.commonuiCtrl.presentAlert('Alert','Please Check your internet connection.')
      });
  
      this.network.onConnect().subscribe((res) => {
      
         this.alertCtrl.dismiss();
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      this.platform.backButton.subscribeWithPriority(0, () => {
        this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
          if (this.router.url != '/itemdetail') {
            // await this.router.navigate(['/']);
            await this.location.back();
          } else if (this.router.url === '/itemdetail') {
            if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
              this.lastTimeBackPress = new Date().getTime();
              this.presentAlertConfirm();
            } else {
              navigator['app'].exitApp();
            }
          }
        });
      });
    });
  }
  backButtonEvent() {
 
  }
  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      // header: 'Confirm!',
      message: 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });
  
    await alert.present();
  }


  ngOnInit() {
    this.checkLogin();
  }
  async checkLogin() {
    let loginstatus = await this.commonuiCtrl.isLogin();
    if (loginstatus == true) {
      let userexistingstatus = await this.commonuiCtrl.isUserExist();
      if (userexistingstatus === true) {
        this.router.navigate(['dashboardpage']);
      }
      else {
        this.router.navigate(['selectuserpage']);
      }
    } else {
      this.router.navigate(['welcomeslider']);
    }
  }
  RedirectToPage(pageis) {
    this.router.navigate([pageis]);
    this.menuCtrl.close();
  }
  logout() {
    this.commonuiCtrl.doLogOut();
  }
  onMenuOpen(){
    console.log("onMenu");
  }
  menuOpened(){
    this.commonuiCtrl.getTypeOfUser().then((user) => {
      this.LoginUsertype=user;
    });
    this.commonuiCtrl.getUserName().then((user) => {
      this.LoginName=user;
    });
    
  }
}
