import { Injectable } from '@angular/core';
import { ProductDescription } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  actionUrl: string= environment.baseUrl;


  // private products: Array<ProductDescription> = [
  //   {
  //     id: 1,
  //     title: 'half girl frd',
  //     imageUrl: 'https://rukminim1.flixcart.com/image/612/612/book/1/1/4/half-girlfriend-original-imaeaywyr6a5nazv.jpeg?q=70',
  //     description: 'a good book',
  //     imageAlt: 'book',
  //     isAvailable: true,
  //     price: 10
  //   },
  //   {
  //     id: 2,
  //     title: 'one night at the call center',
  //     imageUrl: 'https://rukminim1.flixcart.com/image/612/612/book/5/0/6/one-night-at-the-call-centre-original-imaesdu5ryqqrmhk.jpeg?q=70',
  //     description: 'my first book',
  //     imageAlt: 'book',
  //     isAvailable: true,
  //     price: 25
  //   },
  //   {
  //     id: 3,
  //     title: 'five point someone',
  //     imageUrl: 'https://rukminim1.flixcart.com/image/612/612/book/4/9/0/five-point-someone-original-imaeyg6yfbyf62eg.jpeg?q=70',
  //     description: 'friendship based book',
  //     imageAlt: 'book',
  //     isAvailable: true,
  //     price: 35
  //   },
  //   {
  //     id: 4,
  //     title: 'one indian girl',
  //     imageUrl: 'https://rukminim1.flixcart.com/image/612/612/jplif0w0/book/1/4/6/one-indian-girl-original-imafbtyk8fsgwa8w.jpeg?q=70',
  //     description: 'i like the story',
  //     imageAlt: 'book',
  //     isAvailable: true,
  //     price: 49
  //   },
  //   {
  //     id: 5,
  //     title: 'one night at the call center',
  //     imageUrl: 'https://rukminim1.flixcart.com/image/612/612/book/5/0/6/one-night-at-the-call-centre-original-imaesdu5ryqqrmhk.jpeg?q=70',
  //     description: 'my first book',
  //     imageAlt: 'book',
  //     isAvailable: true,
  //     price: 55
  //   },
  //   {
  //     id: 6,
  //     title: 'five point someone',
  //     imageUrl: 'https://rukminim1.flixcart.com/image/612/612/book/4/9/0/five-point-someone-original-imaeyg6yfbyf62eg.jpeg?q=70',
  //     description: 'friendship based book',
  //     imageAlt: 'book',
  //     isAvailable: false,
  //     price: 65
  //   },
  //   {
  //     id: 7,
  //     title: 'one indian girl',
  //     imageUrl: 'https://rukminim1.flixcart.com/image/612/612/jplif0w0/book/1/4/6/one-indian-girl-original-imafbtyk8fsgwa8w.jpeg?q=70',
  //     description: 'i like the story',
  //     imageAlt: 'book',
  //     isAvailable: true,
  //     price: 79
  //   },
  //   {
  //     id: 8,
  //     title: 'one indian girl',
  //     imageUrl: 'https://rukminim1.flixcart.com/image/612/612/jplif0w0/book/1/4/6/one-indian-girl-original-imafbtyk8fsgwa8w.jpeg?q=70',
  //     description: 'i like the story',
  //     imageAlt: 'book',
  //     isAvailable: true,
  //     price: 89
  //   },
  //   {
  //     id: 9,
  //     title: '2 states',
  //     imageUrl: 'https://rukminim1.flixcart.com/image/612/612/book/5/4/3/2-states-the-story-of-my-marriage-original-imadutytmer3kgmh.jpeg?q=70',
  //     description: 'ture story',
  //     imageAlt: 'book',
  //     isAvailable: true,
  //     price: 99
  //   }
  // ];

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get(this.actionUrl + '/product');
  }

  getProductWithID() {

  }

  addProduct(product: ProductDescription) {
    return this.http.post(this.actionUrl + '/product', product);
  }

  filterProduct(id){
    return this.http.get(this.actionUrl + '/product/' + id)
   }

   updateProduct(form,id){
     return this.http.put(this.actionUrl + '/product/' + id, form)
   }

   deleteProduct(id){
    return this.http.delete(this.actionUrl + '/product/' + id)
  }
}
