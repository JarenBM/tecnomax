import { Component, inject } from '@angular/core';
import { Producto } from '../../Interface/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-ofertas',
  styleUrl: './ofertas.css',
  templateUrl: './ofertas.html',
})
export class Ofertas {
  private productoService = inject(ProductoService) //inyección de dependencias

  listaOfertas:Producto[]=[]

  constructor(){
    this.mostrarOfertas()
  }

  mostrarOfertas(){
    this.listaOfertas=this.productoService.mostrarOfertas()
  }

  precioFinal(producto:Producto){
    return this.productoService.precioFinal(producto)
  }

}