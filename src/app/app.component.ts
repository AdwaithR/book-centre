import { Component } from '@angular/core';
import { ProductDescription } from './model/product';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'book-centre';
}
