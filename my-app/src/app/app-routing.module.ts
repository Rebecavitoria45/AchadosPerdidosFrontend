import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/security/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginGuard } from './pages/security/login.guard';
import { HomeComponent } from './pages/home/home.component';
import { ObjetospageComponent } from './pages/objetospage/objetospage.component';
import { CadastroObjetoComponent } from './pages/cadastro-objeto/cadastro-objeto.component';
import { MeusitensComponent } from './pages/meusitens/meusitens.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component: LayoutComponent,
    canActivate:[LoginGuard],
    children:[
      {path:'', component:HomeComponent},
      {path:'objetospage', component: ObjetospageComponent},
      {path: 'cadastroobjeto', component: CadastroObjetoComponent},
      {path:'meusitens', component: MeusitensComponent},
    ]
  },
  {path:'**', redirectTo:'login'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
