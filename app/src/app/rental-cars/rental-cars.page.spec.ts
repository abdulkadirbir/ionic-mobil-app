import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentalCarsPage } from './rental-cars.page';

describe('RentalCarsPage', () => {
  let component: RentalCarsPage;
  let fixture: ComponentFixture<RentalCarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalCarsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentalCarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
