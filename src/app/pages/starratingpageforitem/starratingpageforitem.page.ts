import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
import { ItemProvidersService } from 'src/app/providers/item-providers.service';

@Component({
  selector: 'app-starratingpageforitem',
  templateUrl: './starratingpageforitem.page.html',
  styleUrls: ['./starratingpageforitem.page.scss'],
})
export class StarratingpageforitemPage implements OnInit {


  arrayRates = [
    { rate: 'normalstar' },
    { rate: 'normalstar' },
    { rate: 'normalstar' },
    { rate: 'normalstar' },
    { rate: 'normalstar' },
  ]
  globrating = 0;
  globItemid = "";
  ratingData: FormGroup
  itemDataForReview:UserDatabase
  // http://ijsrie.com/phpapi/api/review.php?itemid=2&&review=bad&rating=4&&reviewdesc=not
  constructor(private formBuilder: FormBuilder,
    private commonUiCtrl: CommonUiControlService,
    private iremproviservice: ItemProvidersService,
    private loadingController: LoadingController,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

      this.activatedRoute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
         console.log(this.router.getCurrentNavigation().extras.state.user);
         this.itemDataForReview=this.router.getCurrentNavigation().extras.state.user;
         console.log(this.itemDataForReview);

        }
      });

    this.ratingData = this.formBuilder.group({
      rating: ['', Validators.required],
      reviewdesc: ['', Validators.required],
      itemid: ['']
    })
  }

  ngOnInit() {
  }

  updateRating(rateNumber) {
    this.globrating = rateNumber + 1;
    let lownum = rateNumber;
    let hignum = 4;
    while (hignum >= 0) {
      this.arrayRates[hignum].rate = "normalstar";
      hignum--;
    }
    while (lownum >= 0) {
      this.arrayRates[lownum].rate = "ratedstar";
      lownum--;
    }
  }
  async submitReview() {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    this.ratingData.value.rating = this.globrating;
    this.ratingData.value.itemid = this.itemDataForReview.itemid;

    console.log(this.ratingData.value);
    if (this.ratingData.value.rating != 0 && this.ratingData.value.reviewdesc.length > 1) {
      this.iremproviservice.saveItemRating(this.ratingData.value).subscribe((result) => {
        loading.dismiss();
      this.commonUiCtrl.presentAlert("Success", "Your review was saved successfully");
        console.log(result);
      });
      loading.dismiss();
    } else {
      this.commonUiCtrl.presentAlert("Alert", "Please provide rating and description");
      loading.dismiss();
    }
  }


}
