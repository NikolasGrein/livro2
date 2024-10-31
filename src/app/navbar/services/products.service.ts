import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    {id: 1, name: 'livro 1', price: 5.0, description: 'Livro', image: '../livro.png'},
    {id: 2, name: 'livro 1', price: 5.0, description: 'Livro', image: '../livro.png'},
    {id: 3, name: 'livro 1', price: 5.0, description: 'Livro', image: '../livro.png'},
    {id: 4, name: 'livro 1', price: 5.0, description: 'Livro', image: '../livro.png'},
    {id: 5, name: 'livro 1', price: 5.0, description: 'Livro', image: '../livro.png'},
    {id: 6, name: 'livro 1', price: 5.0, description: 'Livro', image: '../livro.png'},
    {id: 7, name: 'livro 1', price: 5.0, description: 'Livro', image: '../livro.png'},
    {id: 8, name: 'livro 1', price: 5.0, description: 'Livro', image: '../livro.png'},
    {id: 9, name: 'livro 1', price: 5.0, description: 'Livro', image: '../livro.png'},
    {id: 10, name: 'livro 1', price: 5.0, description: 'Livro', image: '../livro.png'}
  ];
  getProdutos(): Iproducts[] {
    return this.products;
  }
}
