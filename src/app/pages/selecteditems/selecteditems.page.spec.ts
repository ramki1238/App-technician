import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecteditemsPage } from './selecteditems.page';

describe('SelecteditemsPage', () => {
  let component: SelecteditemsPage;
  let fixture: ComponentFixture<SelecteditemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecteditemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecteditemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
