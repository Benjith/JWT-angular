import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate  } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ListdataComponent } from './listdata/listdata.component';

const routes: Routes = [
      {path:'login' , component:LoginComponent},
      {path:'listdata' , component:ListdataComponent , canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
