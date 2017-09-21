import {Component, Input} from "@angular/core";
import StarsComponent from 'app/components/stars/stars';
import {Product} from 'app/services/product-service';

@Component({
  selector: 'auction-product-item',
  templateUrl: 'product-item.html'
})

export default class ProductItemComponent {
  @Input() product: Product;
}
