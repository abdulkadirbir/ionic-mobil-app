import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'anasayfa',
    loadChildren: () => import('./anasayfa/anasayfa.module').then( m => m.AnasayfaPageModule)
  },
  {
    path: 'add-car',
    loadChildren: () => import('./add-car/add-car.module').then( m => m.AddCarPageModule)
  },
  {
    path: 'rental-cars',
    loadChildren: () => import('./rental-cars/rental-cars.module').then( m => m.RentalCarsPageModule)
  },
  {
    path: 'sale-cars',
    loadChildren: () => import('./sale-cars/sale-cars.module').then( m => m.SaleCarsPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
