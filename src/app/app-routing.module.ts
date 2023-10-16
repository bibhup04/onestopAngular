import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginAndRegister/login/login.component';
import { RegisterComponent } from './loginAndRegister/register/register.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { HomeComponent } from './home/home/home.component';
import { AdminComponent } from './home/admin/admin.component';
import { AdminGuard } from './AdminGuard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { FamilyMemberComponent } from './home/family-member/family-member.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'family', component: FamilyMemberComponent},
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard], 
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
