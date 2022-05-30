import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { HardskillsComponent } from './hardskills/hardskills.component';
import { SoftskillsComponent } from './softskills/softskills.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IdiomasComponent } from './idiomas/idiomas.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';

import { InterceptorService } from './services/interceptor.service';
import { PortfolioService } from './services/portfolio.service';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { NuevoComponent as nuevoE} from './estudios/nuevo.component';
import { ModificarComponent as modE} from './estudios/modificar.component';
import { NuevoComponent as nuevoS} from './softskills/nuevo.component';
import { ModificarComponent as modS} from './softskills/modificar.component';
import { NuevoComponent as nuevoH} from './hardskills/nuevo.component';
import { ModificarComponent as modH} from './hardskills/modificar.component';
import { NuevoComponent as nuevoP} from './proyectos/nuevo.component';
import { ModificarComponent as modP} from './proyectos/modificar.component';
import { NuevoComponent } from './hardskills/nuevo.component';
import { ModificarComponent } from './hardskills/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EstudiosComponent,
    HardskillsComponent,
    SoftskillsComponent,
    SidebarComponent,
    IdiomasComponent,
    LoginComponent,
    PortfolioComponent,
    RegisterComponent,
    ProyectosComponent,
    nuevoE,
    modE,
    nuevoS,
    modS,
    nuevoH,
    modH,
    nuevoP,
    modP,
    NuevoComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [ PortfolioService, 
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true } 
  ],
      
  bootstrap: [AppComponent]
})
export class AppModule { }
