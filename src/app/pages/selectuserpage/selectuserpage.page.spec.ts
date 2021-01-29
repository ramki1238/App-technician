import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectuserpagePage } from './selectuserpage.page';

describe('SelectuserpagePage', () => {
  let component: SelectuserpagePage;
  let fixture: ComponentFixture<SelectuserpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectuserpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectuserpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
