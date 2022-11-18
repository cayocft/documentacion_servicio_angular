import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  url_backend = environment.url_backend
  constructor() { }

  enviar_datos_servicio(datos:any){
    console.log("Los datos recibidos son");
    console.log(datos)
    return true;
  } 


}

