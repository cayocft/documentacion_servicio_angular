import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Importar Servicio
import { FormularioService } from '../../servicios/formulario.service';
//FIN Importar Servicio
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario:any;

  constructor(
    private formularioSrv: FormularioService,
    private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(4)]],
      apellido:['',[Validators.required, Validators.minLength(4)]],
      edad: ['', [Validators.required, Validators.min(5)]],
      email: ['',Validators.required]
    });
  }

  //obtener los las validaciones
  get formularioReactivo(){
    return this.formulario.controls;
  }

  botonEnviar(){
    this.formularioSrv.enviar_datos_servicio(this.formularioReactivo)

  }

  
}
