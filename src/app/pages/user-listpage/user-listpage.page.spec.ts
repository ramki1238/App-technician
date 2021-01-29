import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserListpagePage } from './user-listpage.page';

describe('UserListpagePage', () => {
  let component: UserListpagePage;
  let fixture: ComponentFixture<UserListpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
