import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { HardskillsComponent } from './hardskills/hardskills.component';
import { SoftskillsComponent } from './softskills/softskills.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    EstudiosComponent,
    HardskillsComponent,
    SoftskillsComponent,
    SidebarComponent,
    IdiomasComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
