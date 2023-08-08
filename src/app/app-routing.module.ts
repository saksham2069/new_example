import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { logoutAuthGuard } from './guards/logout-auth.guard';


const routes: Routes = [
  {path:'', redirectTo:'auth', pathMatch:'full'},
  { path: 'auth', loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule),canActivate:[logoutAuthGuard] },
  { path: 'main', loadChildren: () => import('./feature/main/main.module').then(m => m.MainModule),canActivate:[AuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
