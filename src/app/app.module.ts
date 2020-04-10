import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CategoryComponent } from './category/category.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodAlertsComponent } from './food-alerts/food-alerts.component';
import { FoodListComponent } from './food-list/food-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthInterceptor } from './authconfig.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategoryComponent,
    FoodItemComponent,
    FoodAlertsComponent,
    FoodListComponent,
    TopBarComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    
  
   //
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
