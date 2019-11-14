import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  myForm: FormGroup;
  routeSub: any;
  id: any;
  data: any;



  constructor(
    private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl(),
      description: new FormControl('', Validators.maxLength(100)),
      Email: new FormControl('', Validators.email),
      imageUrl: new FormControl('', Validators.required),
      isAvailable: new FormControl('', Validators.required),

    });
    console.log(this.myForm);
    this.route.params.subscribe(params => {
      this.id = +params.id;

      console.log(params);
      this.productService.filterProduct(this.id).subscribe(Response => {
        this.data = Response;
        this.myForm.patchValue({
          title: this.data.title,
          description: this.data.description,
          imageUrl: this.data.imageUrl,
          price: this.data.price,
          isAvailable: this.data.isAvailable,

        });
      });



    });


  }

  onSubmit(form: FormGroup) {
    if (this.id) {
      this.productService.updateProduct(form.value, this.id).subscribe(data => {console.log(data); });
      alert('Product updateded successfully');
      this.router.navigate(['']);

    } else {
      this.productService.addProduct(this.myForm.value).subscribe(Response => {console.log(Response); });
      alert('Product added successfully');
      this.router.navigate(['']);
    }



    console.log(this.myForm.value);
  }

  delete() {
    this.productService.deleteProduct(this.id).subscribe(data => {console.log(data); });
    alert('Product deleted successfully');
    this.router.navigate(['']);
  }

}
