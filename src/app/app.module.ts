import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { LoginComponent } from './loginAndRegister/login/login.component';
import { RegisterComponent } from './loginAndRegister/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './HttpInterceptorService';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { HomeComponent } from './home/home/home.component';
import { AdminComponent } from './home/admin/admin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FamilyMemberComponent } from './home/family-member/family-member.component';
import { CardComponent } from './home/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponentComponent,
    LoginComponent,
    RegisterComponent,
    UnauthorizedComponent,
    HomeComponent,
    AdminComponent,
    NavigationComponent,
    FamilyMemberComponent,
    CardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
