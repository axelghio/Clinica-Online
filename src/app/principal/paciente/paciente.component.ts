import { Component, OnInit } from '@angular/core';

//import database
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { element } from 'protractor';

//import service
import { FirebaseService } from "../../servicios/firebase.service";

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {
  usuario;
  constructor(private auth: FirebaseService, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.auth.traerUsuario()
    .snapshotChanges()
        .subscribe((item) => {
          this.usuario = [];
          item.forEach((element) => {
            let x = element.payload.toJSON();
            x["$key"] = element.key;
            this.usuario.push(x);
          });
        });
  }
}
