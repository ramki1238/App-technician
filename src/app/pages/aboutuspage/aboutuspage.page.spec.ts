import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutuspagePage } from './aboutuspage.page';

describe('AboutuspagePage', () => {
  let component: AboutuspagePage;
  let fixture: ComponentFixture<AboutuspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutuspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutuspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
