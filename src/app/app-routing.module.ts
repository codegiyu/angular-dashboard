import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ReportsComponent } from '../pages/reports/reports.component';
import { ProfileComponent } from '../pages/profile/profile.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "reports", component: ReportsComponent },
  { path: "profile", component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
