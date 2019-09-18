import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES } from './models/routes.model';

const routes: Routes = [
  { path: '', redirectTo: ROUTES.home, pathMatch: 'full' },
  { path: ROUTES.home, loadChildren: './pages/home/home.module#HomeModule' },
  { path: ROUTES.account, loadChildren: './pages/account/account.module#AccountModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
