import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'studentComponent',
    loadComponent: () => import('./student/student.component').then(mod => mod.StudentComponent),
    canActivate: [AuthGuard]
  },
  { path: 'dash-component', component: DashboardComponent },
  {
    path: 'forgetPassword',
    // component: ForgetPasswordComponent
    loadComponent: () => import('./forget-password/forget-password.component').then(mod => mod.ForgetPasswordComponent)
  },
  { path: '', redirectTo: '/dash-component', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () => import('./page-not-found/page-not-found.component').then(mod => mod.PageNotFoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
