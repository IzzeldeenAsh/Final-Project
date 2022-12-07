import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'' , redirectTo:'home', pathMatch: 'full', //canLoad:[NoAuthGuard]
  },
  {
    path:'auth' ,loadChildren:()=>import('./Auth/auth.module').then(m=>m.AuthModule),
    //canLoad:[NoAuthGuard]
  },
  {
    path:'home', loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule),
    // canLoad: [AuthGuard]
  },
  {
    path:'dashboard', loadChildren:()=>import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule),
    //  canLoad: [AuthGuard]
  },
  {
    path:'**' , redirectTo:'home', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
