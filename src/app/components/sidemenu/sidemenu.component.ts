import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
@Input('pagetitle') pagetitle:string
PageTitle=""
  constructor() { 

  }

  ngOnInit() {
this.PageTitle=this.pagetitle;

  }
}
