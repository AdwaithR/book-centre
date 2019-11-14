import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  @Input()
  product: any;
  router: any;
  ProductService: any;


  @Output()
  isDeleted = new EventEmitter();

  constructor(private _productService: ProductService) { }

delete(id) {
    this._productService.deleteProduct(id).subscribe((data: any) => {
      console.log(data);
      const dataObj = {
      };
      this.isDeleted.emit(data); });
    alert('Product deleted successfully');
  }

id(id: any) {
    throw new Error('Method not implemented.');
  }


ngOnInit() {
  }

}
