import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSystemComponent } from './components/login-system/login-system.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookComponent } from './components/book/book.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginSystemComponent },
  {
    path:"dashboard",
    component:DashboardComponent,
    children:[
      {
        path:"book",
        component:BookComponent
      },
      {
        path:"book/:bookId",
        component:BookDetailsComponent
      },

      {
        path:"userProfile",
        component:UserProfileComponent
      },
      {
        path:"cart",
        component:CartComponent
      },
      {
        path:"wishlist",
        component:WishlistComponent
      },
      {
        path:"order",
        component:OrderComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
