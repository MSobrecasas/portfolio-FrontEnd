import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ModificarComponent as modS } from './softskills/modificar.component';
import { NuevoComponent as nuevoS} from './softskills/nuevo.component';
import { ModificarComponent as modE} from './estudios/modificar.component';
import { NuevoComponent as nuevoE} from './estudios/nuevo.component';
import { ModificarComponent as modH} from './hardskills/modificar.component';
import { NuevoComponent as nuevoH} from './hardskills/nuevo.component';
import { GuardsService as guard } from './services/guards.service';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent, pathMatch:'full'},
  { path: 'nuevo', component: nuevoS, canActivate: [guard], data: { expectedRol: ['admin'] }},
  { path: 'modificar/:id', component: modS , canActivate: [guard], data: { expectedRol: ['admin'] }},
  { path: 'registro', component: RegisterComponent },
  { path: 'nuevoe', component: nuevoE, canActivate: [guard], data: { expectedRol: ['admin'] }},
  { path: 'modificare/:id', component: modE , canActivate: [guard], data: { expectedRol: ['admin'] }},
  { path: 'nuevoh', component: nuevoH, canActivate: [guard], data: { expectedRol: ['admin'] }},
  { path: 'modificarh/:id', component: modH , canActivate: [guard], data: { expectedRol: ['admin'] }},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }