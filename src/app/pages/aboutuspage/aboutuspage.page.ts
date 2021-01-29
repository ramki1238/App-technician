import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-aboutuspage',
  templateUrl: './aboutuspage.page.html',
  styleUrls: ['./aboutuspage.page.scss'],
})
export class AboutuspagePage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  pagetitle="About us"


}
