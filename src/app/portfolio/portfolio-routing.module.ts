import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'portfolio/:id', component: PortfolioDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
