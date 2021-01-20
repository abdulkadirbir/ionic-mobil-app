import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaleCarsPage } from './sale-cars.page';

describe('SaleCarsPage', () => {
  let component: SaleCarsPage;
  let fixture: ComponentFixture<SaleCarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleCarsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaleCarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
