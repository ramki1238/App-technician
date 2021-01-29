import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WelcomesliderPage } from './welcomeslider.page';

describe('WelcomesliderPage', () => {
  let component: WelcomesliderPage;
  let fixture: ComponentFixture<WelcomesliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomesliderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomesliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
