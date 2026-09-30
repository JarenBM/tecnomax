import { Service } from '@angular/core';
import { Producto } from '../Interface/producto';

@Service()
export class ProductoService {
    private listaProductos: Producto[]=[
        {id:1, nombre:'Samsung Galaxy S24', imagen:'https://placehold.co/400x300/0d6efd/ffffff?text=Galaxy+S24', precio:3499, categoria:'Celulares', enOferta:true, descuento:15},
        {id:2, nombre:'iPhone 15', imagen:'https://placehold.co/400x300/212529/ffffff?text=iPhone+15', precio:3999, categoria:'Celulares', enOferta:false, descuento:0},
        {id:3, nombre:'Xiaomi Redmi Note 13', imagen:'https://placehold.co/400x300/fd7e14/ffffff?text=Redmi+Note+13', precio:999, categoria:'Celulares', enOferta:true, descuento:10},
        {id:4, nombre:'Laptop Lenovo IdeaPad 3', imagen:'https://placehold.co/400x300/6610f2/ffffff?text=IdeaPad+3', precio:2299, categoria:'Laptops', enOferta:true, descuento:20},
        {id:5, nombre:'Laptop HP Pavilion 15', imagen:'https://placehold.co/400x300/198754/ffffff?text=HP+Pavilion', precio:2799, categoria:'Laptops', enOferta:false, descuento:0},
        {id:6, nombre:'ASUS TUF Gaming F15', imagen:'https://placehold.co/400x300/dc3545/ffffff?text=ASUS+TUF', precio:3899, categoria:'Laptops', enOferta:false, descuento:0},
        {id:7, nombre:'Audifonos Bluetooth JBL', imagen:'https://placehold.co/400x300/0dcaf0/000000?text=JBL', precio:249, categoria:'Accesorios', enOferta:true, descuento:25},
        {id:8, nombre:'Mouse Logitech Inalambrico', imagen:'https://placehold.co/400x300/6c757d/ffffff?text=Mouse+Logitech', precio:89, categoria:'Accesorios', enOferta:false, descuento:0},
        {id:9, nombre:'Cargador Rapido 65W', imagen:'https://placehold.co/400x300/ffc107/000000?text=Cargador+65W', precio:129, categoria:'Accesorios', enOferta:false, descuento:0},
        {id:10, nombre:'Smartwatch Xiaomi Band 8', imagen:'https://placehold.co/400x300/20c997/000000?text=Mi+Band+8', precio:199, categoria:'Dispositivos inteligentes', enOferta:true, descuento:15},
        {id:11, nombre:'Parlante Inteligente Echo Dot', imagen:'https://placehold.co/400x300/0b5ed7/ffffff?text=Echo+Dot', precio:279, categoria:'Dispositivos inteligentes', enOferta:false, descuento:0},
        {id:12, nombre:'Camara de Seguridad WiFi', imagen:'https://placehold.co/400x300/343a40/ffffff?text=Camara+WiFi', precio:159, categoria:'Dispositivos inteligentes', enOferta:false, descuento:0}
    ]

    mostrar(){
        return this.listaProductos
    }

    mostrarOfertas(){
        return this.listaProductos.filter(p => p.enOferta)
    }

    mostrarPorCategoria(categoria: string){
        return this.listaProductos.filter(p => p.categoria === categoria)
    }

    precioFinal(producto: Producto){
        return Number((producto.precio - (producto.precio * producto.descuento / 100)).toFixed(2))
    }
}