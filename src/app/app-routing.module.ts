import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FoodItemComponent} from './food-item/food-item.component';
import {FoodListComponent} from './food-list/food-list.component';
import {CategoryComponent} from "./category/category.component";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthGuard } from "./auth.guard";
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'foods', component: FoodListComponent},
  
  { path: '', component: FoodListComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'category/:id/food-id/:id', component: FoodItemComponent},
  { path: 'category/:id', component: CategoryComponent},
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
