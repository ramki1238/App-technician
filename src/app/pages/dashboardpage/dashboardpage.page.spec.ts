import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardpagePage } from './dashboardpage.page';

describe('DashboardpagePage', () => {
  let component: DashboardpagePage;
  let fixture: ComponentFixture<DashboardpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
