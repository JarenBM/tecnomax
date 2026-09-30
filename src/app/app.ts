import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Categorias } from './components/categorias/categorias';
import { Productos } from './components/productos/productos';
import { Ofertas } from './components/ofertas/ofertas';
import { Resenas } from './components/resenas/resenas';
import { Nosotros } from './components/nosotros/nosotros';

@Component({
  imports: [Navbar, Categorias, Productos, Ofertas, Resenas, Nosotros],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tecnomax');
}