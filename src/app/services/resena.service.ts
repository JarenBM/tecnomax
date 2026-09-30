import { Service } from '@angular/core';
import { Resena } from '../Interface/resena';

@Service()
export class ResenaService {
    private listaResenas: Resena[]=[
        {nombre:'Carlos Ramirez', producto:'Laptop Lenovo IdeaPad 3', valoracion:5, comentario:'Excelente rendimiento para la universidad y llego muy rapido.'},
        {nombre:'Maria Torres', producto:'Audifonos Bluetooth JBL', valoracion:4, comentario:'Muy buen sonido y la bateria dura bastante.'},
        {nombre:'Luis Quispe', producto:'Xiaomi Redmi Note 13', valoracion:5, comentario:'Gran celular por el precio, la camara es muy buena.'}
    ]

    guardar(resena: Resena){
        this.listaResenas.push(resena)

    }
    mostrar(){
        return this.listaResenas
    }
}