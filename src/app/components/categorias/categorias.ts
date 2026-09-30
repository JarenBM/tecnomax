import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  styleUrl: './categorias.css',
  templateUrl: './categorias.html',
})
export class Categorias {
  listaCategorias = [
    {nombre:'Celulares', icono:'📱', descripcion:'Los mejores smartphones de las marcas líderes'},
    {nombre:'Laptops', icono:'💻', descripcion:'Para estudiar, trabajar y jugar'},
    {nombre:'Accesorios', icono:'🎧', descripcion:'Audífonos, mouse, cargadores y más'},
    {nombre:'Dispositivos inteligentes', icono:'⌚', descripcion:'Smartwatch, parlantes y cámaras smart'}
  ]
}