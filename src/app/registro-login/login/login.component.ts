import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FirebaseService } from '../../servicios/firebase.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  usuario = '';
  clave= '';
  logeando=true;
  mensaje: string;

  constructor( private router: Router, private service: FirebaseService) { }

  ngOnInit(): void {
  }

  //pegar a la base de datos y autentificar datos. para saber que tipo de perfil llega. 
  //luego verificar en Authentification si existe ese correo registrado.
  Login() {
    if(this.usuario != '' && this.clave !='')
    {
      this.service.login(this.usuario, this.clave).then((res:any) =>{
        if(res.user.emailVerified){
          //Hacer que redireccione dependiendo del tipo de usuario.
          //if(this.usuario == "admin@admin.com")
          //{
          //  this.router.navigate(['/inicio/admin']);
          //}
          //else if(this.usuario == "profesional@profesional.com"){
          //  this.router.navigate(['/inicio/profesional']);
          //}
          //else{
            this.router.navigate(['/inicio/paciente']);
          //}
        }
        else{
          setTimeout(() => {
            this.mensaje ="";
          }, 3000);
          this.mensaje = "Cuenta no verificada. por favor revisa tu email.";
        }        
      }).catch();
    }
  }

  //Redirecciona a la seccion registro.
  Registrar(){
    this.router.navigate(['/registro']);
  }
}
