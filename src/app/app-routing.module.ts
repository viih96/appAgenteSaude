import { AuthGuard } from './shared/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './shared/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'symptoms-list',
    loadChildren: () => import('./symptoms/symptoms-list/symptoms-list.module').then( m => m.SymptomsListPageModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'symptoms-form/new',
    loadChildren: () => import('./symptoms/symptoms-form/symptoms-form.module').then( m => m.SymptomsFormPageModule)
  },
  {
    path: 'symptoms-form/edit/:id',
    loadChildren: () => import('./symptoms/symptoms-form/symptoms-form.module').then( m => m.SymptomsFormPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-profession',
    loadChildren: () => import('./create-profession/create-profession.module').then( m => m.CreateProfessionPageModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'update-user',
    loadChildren: () => import('./update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'medicament/:id',
    loadChildren: () => import('./medicament/medicament.module').then( m => m.MedicamentPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'attendance-information/:id',
    loadChildren: () => import('./attendance-information/attendance-information.module').then( m => m.AttendanceInformationPageModule)
  },
  {
    path: 'profession-list',
    loadChildren: () => import('./profession-list/profession-list.module').then( m => m.ProfessionListPageModule)
  },
  {
    path: 'users-view/:id',
    loadChildren: () => import('./users-view/users-view.module').then( m => m.UsersViewPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


