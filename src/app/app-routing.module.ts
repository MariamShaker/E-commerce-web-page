import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) , data:{index:0}},
  { path: 'signin', loadChildren: () => import('./modules/signin/signin.module').then(m => m.SigninModule) },
  { path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule) },
  { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) , canActivate:[AuthGuard],data:{index:1}},
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'shop', loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule) },
  { path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
