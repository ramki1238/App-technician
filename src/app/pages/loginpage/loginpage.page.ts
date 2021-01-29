import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/providers/authservice.service';
import { CommonUiControlService } from '../../providers/common-ui-control.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  private loginData: FormGroup;
  private otpForm: FormGroup;
  loginDiv:boolean;
  constructor(private commonUictrl: CommonUiControlService,
    private formBuilder: FormBuilder,
    private authservice: AuthserviceService,
    private navCtrl:Router) {
      this.loginDiv  = true;

    this.loginData = this.formBuilder.group({ phoneno: ['', Validators.required] });
    this.otpForm = this.formBuilder.group({
      first: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
      second: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
      third: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
      fourth: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
    });
  }

  ngOnInit() {
    this.commonUictrl.menuCntrl.enable(false);
  }
  moveFocus(event, refvatible, rebvatible) {
    if (event.key === "Backspace" || event.keyCode === 8 || event.keyCode === 46)
      rebvatible.setFocus();
    else {
      refvatible.setFocus();
    }
  }
  async loginValication() {
    // this.loginDiv = false;

    const loading = await this.commonUictrl.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    if (!this.loginData.valid || this.loginData.value.phoneno.length!=10) {
      this.commonUictrl.presentAlert("Alert", "Please enter valid mobile number to login")
      loading.dismiss();
    }
    else {
      this.authservice.checkNumber(this.loginData.value).subscribe((result) => {
        console.log(result);
        if (result) {
          if (result.status) {
            if (result.status > 0) {
              this.commonUictrl.storage.set("userid", result.userid);
              this.commonUictrl.storage.set("name", result.name);

              this.resendOTP();
              loading.dismiss();

            }
            else {
              this.commonUictrl.presentAlert("Oops", "Number not exits", ['ok']);
              if(loading)
              loading.dismiss();
            }
          } else {
            this.commonUictrl.presentAlert("Oops", "Number not exits", ['ok']);
            if(loading)
            loading.dismiss();
          }
        }
      })
    }
    
  }
  submitOtp() {
    this.commonUictrl.storage.get('otp').then((otp) => {
      var o = ''+this.otpForm.value.first + this.otpForm.value.second + this.otpForm.value.third + this.otpForm.value.fourth
      if (o == otp) {
        this.commonUictrl.storage.set("auth", "success");
        this.commonUictrl.storage.get('userid').then((userid) => {
          if (userid) {
            this.loginDiv = true;

            // this.navCtrl.navigate(['selectuserpage']);
            this.navCtrl.navigateByUrl('/selectuserpage');

          }
        })
      } else {
        this.commonUictrl.presentAlert("Oops", "Otp not matched.")
      }
    })
    
  }
  resendOTP(){
    
    var val = Math.floor(1000 + Math.random() * 9000);
              this.commonUictrl.storage.set('otp', val)
              let msgObj = {
                action: "sendSms",
                phone: this.loginData.value.phoneno,
                message: "Your otp is " + val
              }
              // this.utils.presentAlert("Otp", val);
              this.commonUictrl.presentAlert("OTP", val, ['Ok']);
              // this.authService.sendSms(msgObj).subscribe((result) => {
              //   // console.log(result)
              // })
              this.loginDiv = false;
           
  }
  

}
