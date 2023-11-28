import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CommanderComponent } from './commander/commander.component';
import { AuthGuard } from './services/authGuard/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:ProduitsComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'commander',
    component:CommanderComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
