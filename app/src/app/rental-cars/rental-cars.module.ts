import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentalCarsPageRoutingModule } from './rental-cars-routing.module';

import { RentalCarsPage } from './rental-cars.page';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentalCarsPageRoutingModule,
    SharedModule
  ],
  declarations: [RentalCarsPage]
})
export class RentalCarsPageModule {}
