import { Component, inject, signal } from '@angular/core';
import { Resena } from '../../Interface/resena';
import { Producto } from '../../Interface/producto';
import { form, min, max, minLength, required, FormField } from '@angular/forms/signals';
import { ResenaService } from '../../services/resena.service';
import { ProductoService } from '../../services/producto.service';
import Swal from 'sweetalert2';

@Component({
  imports: [FormField],
  selector: 'app-resenas',
  styleUrl: './resenas.css',
  templateUrl: './resenas.html',
})
export class Resenas {
  private resenaService = inject(ResenaService) //inyección de dependencias
  private productoService = inject(ProductoService)

  listaResenas:Resena[]=[]
  listaProductos:Producto[]=[]

  resenaModelo = signal<Resena>({nombre:'', producto:'', valoracion: 0, comentario:''})

  resenaFormulario = form(this.resenaModelo, (esquema)=>{
    required(esquema.nombre, {message:'El nombre es obligatorio'})
    required(esquema.producto, {message:'Indica el producto que compraste'})
    min(esquema.valoracion, 1, {message: 'La valoración mínima es 1 estrella'})
    max(esquema.valoracion, 5, {message: 'La valoración máxima es 5 estrellas'})
    required(esquema.comentario, {message:'El comentario es obligatorio'})
    minLength(esquema.comentario, 10, {message:'El comentario debe tener como mínimo 10 caracteres'})
  })

  constructor(){
    this.listaProductos=this.productoService.mostrar()
    this.mostrarResenas()
  }

  guardarResena(evento:Event){
    evento.preventDefault()
    let resena = {
      'nombre': this.resenaModelo().nombre,
      'producto': this.resenaModelo().producto,
      'valoracion': this.resenaModelo().valoracion,
      'comentario': this.resenaModelo().comentario
    }
    this.resenaService.guardar(resena)
    Swal.fire({
  title: "¡Gracias por tu reseña!",
  text: "Tu valoración se guardó de forma exitosa",
  icon: "success",
  confirmButtonText: "Aceptar",
  confirmButtonColor: "#0d6efd"
});
    this.limpiar()
  }

  mostrarResenas(){
    this.listaResenas=this.resenaService.mostrar()

  }

  estrellas(cantidad:number){
    return '★'.repeat(cantidad) + '☆'.repeat(5 - cantidad)
  }

  limpiar(){
    this.resenaModelo.set({nombre: '', producto: '', valoracion: 0, comentario: ''})
  }

}