import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemdetailPage } from './itemdetail.page';

describe('ItemdetailPage', () => {
  let component: ItemdetailPage;
  let fixture: ComponentFixture<ItemdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
