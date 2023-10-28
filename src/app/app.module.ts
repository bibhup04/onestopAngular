import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceComponent } from './invoice/invoice.component';
import { DialogComponent } from './dialog/dialog.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { BillComponent } from './bill/bill.component';

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
    InvoiceComponent,
    DialogComponent,
    SubscriptionComponent,
    BillComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    CarouselModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
