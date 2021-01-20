import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleCarsPage } from './sale-cars.page';

const routes: Routes = [
  {
    path: '',
    component: SaleCarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleCarsPageRoutingModule {}
