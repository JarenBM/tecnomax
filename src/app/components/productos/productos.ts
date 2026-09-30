import { Component, inject, signal } from '@angular/core';
import { Producto } from '../../Interface/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  private productoService = inject(ProductoService) //inyección de dependencias

  categorias = ['Todos', 'Celulares', 'Laptops', 'Accesorios', 'Dispositivos inteligentes']

  categoriaActiva = signal('Todos')
  listaProductos = signal<Producto[]>([])

  constructor(){
    this.filtrar('Todos')
  }

  filtrar(categoria:string){
    this.categoriaActiva.set(categoria)
    if(categoria === 'Todos'){
      this.listaProductos.set(this.productoService.mostrar())
    } else {
      this.listaProductos.set(this.productoService.mostrarPorCategoria(categoria))
    }
  }

  precioFinal(producto:Producto){
    return this.productoService.precioFinal(producto)
  }

}