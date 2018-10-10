import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import { RouterModule, Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LocalService } from './services/storage/local.service';
import { UserService } from './services/user/user.service';
import { APP_CONFIG, AppConfig } from './app.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StockComponent } from './stock/stock.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { StoreService } from './services/store.service';
 const appRoutes : Routes = [
   {path: '', component: HomeComponent},
   {path: 'login', component: LoginComponent},
   {path: 'stock', component: StockComponent},
   {path: 'users', component: UsersComponent},
   {path: "**", component: LoginComponent}
 ]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    StockComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     FormsModule, 
     Ng2SmartTableModule,
     ReactiveFormsModule, 
     RouterModule.forRoot(appRoutes)
  ],
  providers: [LocalService, UserService, StoreService,
    {provide: APP_CONFIG, useClass: AppConfig},],
  bootstrap: [AppComponent]
})
export class AppModule { }
