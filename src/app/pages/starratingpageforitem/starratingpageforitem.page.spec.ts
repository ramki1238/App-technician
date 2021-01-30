import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarratingpageforitemPage } from './starratingpageforitem.page';

describe('StarratingpageforitemPage', () => {
  let component: StarratingpageforitemPage;
  let fixture: ComponentFixture<StarratingpageforitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarratingpageforitemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarratingpageforitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
