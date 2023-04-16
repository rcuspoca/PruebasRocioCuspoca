import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},  
  {path:'login', component: LoginComponent},
  {path: 'main-page', loadChildren: () => import('./components/main-page/main-page.module').then(x => x.MainPageModule)},
  {path:'**', redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
