import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ProductService, Product, Review} from "../../services/product-service";

@Component({
  selector: 'auction-product-page',
  templateUrl: 'product-detail.html'
})

export default class ProductDetailComponent {
  product: Product;
  reviews: Review[];
  constructor(route: ActivatedRoute, productService: ProductService){
    let prodId: number = parseInt(route.snapshot.params['productId']);
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsForProduct(this.product.id);
  }
}
