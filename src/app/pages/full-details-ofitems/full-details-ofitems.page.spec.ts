import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullDetailsOfitemsPage } from './full-details-ofitems.page';

describe('FullDetailsOfitemsPage', () => {
  let component: FullDetailsOfitemsPage;
  let fixture: ComponentFixture<FullDetailsOfitemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullDetailsOfitemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullDetailsOfitemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
