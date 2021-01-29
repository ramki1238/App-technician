import { Component, OnInit } from '@angular/core';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
@Component({
  selector: 'app-user-listpage',
  templateUrl: './user-listpage.page.html',
  styleUrls: ['./user-listpage.page.scss'],
})
export class UserListpagePage implements OnInit {
  usertype = "Sener";
  constructor(private coomnUiCtrl: CommonUiControlService) {
  }

  ngOnInit() {
this.f();
  }

  f(){
    this.coomnUiCtrl.storage.get("typeofuser").then((useris) => {
      this.usertype=useris;
    });
  }
}
