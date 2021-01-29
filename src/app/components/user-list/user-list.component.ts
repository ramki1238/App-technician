import { Component, Input, OnInit } from '@angular/core';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @Input() usertype: string
  userType = "";
  pagetitle="";
  constructor(private coomnUiCtrl: CommonUiControlService) { 
  }
  ngOnInit() { 
    // this.userType=this.usertype;
    this.f();
  
  }
f(){
  this.coomnUiCtrl.storage.get("typeofuser").then((useris) => {
    this.pagetitle=useris;
  });
}
}
