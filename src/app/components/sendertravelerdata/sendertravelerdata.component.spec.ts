import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendertravelerdataComponent } from './sendertravelerdata.component';

describe('SendertravelerdataComponent', () => {
  let component: SendertravelerdataComponent;
  let fixture: ComponentFixture<SendertravelerdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendertravelerdataComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendertravelerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
