import { Service } from '@angular/core';
import { Producto } from '../Interface/producto';

@Service()
export class ProductoService {
    private listaProductos: Producto[]=[
        {id:1, nombre:'Samsung Galaxy S24', imagen:'https://media.falabella.com/falabellaPE/20885293_01/w=1500,h=1500,fit=cover', precio:3499, categoria:'Celulares', enOferta:true, descuento:15},
        {id:2, nombre:'iPhone 15', imagen:'https://coolboxpe.vtexassets.com/arquivos/ids/498754/iPhone-15-128GB-6GB_2.jpg?v=639123015052900000', precio:3999, categoria:'Celulares', enOferta:false, descuento:0},
        {id:3, nombre:'Xiaomi Redmi Note 13', imagen:'https://miguiatecno.com/wp-content/uploads/2025/01/Xiaomi-Note-13-5G.jpg', precio:999, categoria:'Celulares', enOferta:true, descuento:10},
        {id:4, nombre:'Laptop Lenovo IdeaPad 3', imagen:'https://media.falabella.com/falabellaPE/157543608_01/w=1200,h=1200,fit=pad', precio:2299, categoria:'Laptops', enOferta:true, descuento:20},
        {id:5, nombre:'Laptop HP Pavilion 15', imagen:'https://pe-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/d/5/d5mn2la_01imagenprincipalcontexto_1.jpg', precio:2799, categoria:'Laptops', enOferta:false, descuento:0},
        {id:6, nombre:'ASUS TUF Gaming F15', imagen:'https://promart.vteximg.com.br/arquivos/ids/8894408/imageUrl_1.jpg?v=638849612335700000', precio:3899, categoria:'Laptops', enOferta:false, descuento:0},
        {id:7, nombre:'Audifonos Bluetooth JBL', imagen:'https://media.falabella.com/falabellaPE/155307974_05/w=1200,h=1200,fit=pad', precio:249, categoria:'Accesorios', enOferta:true, descuento:25},
        {id:8, nombre:'Mouse Logitech Inalambrico', imagen:'https://storage.googleapis.com/imagenesimpactoperu6/products/910-005638/image_1_20251211_211233_9228.webp', precio:89, categoria:'Accesorios', enOferta:false, descuento:0},
        {id:9, nombre:'Cargador Rapido 65W', imagen:'https://media.falabella.com/falabellaPE/144383808_01/w=1200,h=1200,fit=pad', precio:129, categoria:'Accesorios', enOferta:false, descuento:0},
        {id:10, nombre:'Smartwatch Xiaomi Band 8', imagen:'https://casemotions.pe/wp-content/uploads/2026/01/MB8_N0000.jpg', precio:199, categoria:'Dispositivos inteligentes', enOferta:true, descuento:15},
        {id:11, nombre:'Parlante Inteligente Echo Dot', imagen:'https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/5084/PMP20001084531/thumbnail-1.png', precio:279, categoria:'Dispositivos inteligentes', enOferta:false, descuento:0},
        {id:12, nombre:'Camara de Seguridad WiFi', imagen:'https://media.falabella.com/falabellaPE/138247343_01/w=1500,h=1500,fit=cover', precio:159, categoria:'Dispositivos inteligentes', enOferta:false, descuento:0}
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