import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalCarsPage } from './rental-cars.page';

const routes: Routes = [
  {
    path: '',
    component: RentalCarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentalCarsPageRoutingModule {}
