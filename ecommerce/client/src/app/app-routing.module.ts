import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main.component';
import { CategoryComponent } from './components/category.component';
import { ConfirmCheckoutComponent } from './components/confirm-checkout.component';

const routes: Routes = [
  { path: '/', component: MainComponent },
  { path: ':category', component: CategoryComponent },
  { path: '/checkout', component: ConfirmCheckoutComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }