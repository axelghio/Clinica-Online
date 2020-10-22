import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro-login/registro/registro.component';
import { LoginComponent } from './registro-login/login/login.component';
import { InicioComponent } from './registro-login/inicio/inicio.component';
import { AdministradorComponent } from './principal/administrador/administrador.component';

//Administrador
import { RegistroAdminComponent } from './principal/administrador/registro-admin/registro-admin.component';
import { ActivarProfesionalComponent } from './principal/administrador/activar-profesional/activar-profesional.component';
import { EspecialidadProfesionalComponent } from './principal/administrador/especialidad-profesional/especialidad-profesional.component';

//Pacientes
import { ProfesionalComponent } from './principal/profesional/profesional.component';

//Profesionales
import { PacienteComponent } from './principal/paciente/paciente.component';

//Importamos el guard
import { BlockGuard } from './guards/block.guard'

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},

  //Administrador
  {path: 'inicio/admin', component: AdministradorComponent, canActivate: [BlockGuard]},
  {path: 'inicio/admin/registro', component: RegistroAdminComponent, canActivate: [BlockGuard]},
  {path: 'inicio/admin/activar', component: ActivarProfesionalComponent, canActivate: [BlockGuard]},
  {path: 'inicio/admin/especialidad', component: EspecialidadProfesionalComponent, canActivate: [BlockGuard]},

  //Pacientes
  {path: 'inicio/paciente', component: PacienteComponent, canActivate: [BlockGuard]},

  //Profesionales
  {path: 'inicio/profesional', component: ProfesionalComponent, canActivate: [BlockGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
