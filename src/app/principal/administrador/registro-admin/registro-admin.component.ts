import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.scss']
})
export class RegistroAdminComponent implements OnInit {
  correo: string;
  clave: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Pegar a Authentification para realizar dicho alta.
  Registrar(){
    
  }

  Volver(){
    this.router.navigate(['/inicio/admin']);
  }
}
