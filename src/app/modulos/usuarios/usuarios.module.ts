import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';



@NgModule({
  declarations: [
    NavBarComponent,
    NosotrosComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NosotrosComponent,
    ServiciosComponent
  ]
})
export class UsuariosModule { }
