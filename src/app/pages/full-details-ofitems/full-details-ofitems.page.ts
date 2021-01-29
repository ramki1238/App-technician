import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-full-details-ofitems',
  templateUrl: './full-details-ofitems.page.html',
  styleUrls: ['./full-details-ofitems.page.scss'],
})
export class FullDetailsOfitemsPage implements OnInit {

  ItemData:UserDatabase
  constructor(private activatedRoute: ActivatedRoute,private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
       console.log(this.router.getCurrentNavigation().extras.state.user);
       this.ItemData=this.router.getCurrentNavigation().extras.state.user;
      }
    });
   }

  ngOnInit() {
  }

  backScreen(){
    this.router.navigate(['selecteditems']);
  }

}
