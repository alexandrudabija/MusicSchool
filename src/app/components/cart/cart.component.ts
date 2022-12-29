import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ShopComponent } from 'src/app/pages/shop/shop.component';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { async } from 'rxjs';
import { loadStripe } from '@stripe/stripe-js';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
})
export class CartComponent implements OnInit {
  
  constructor(public shop: ShopComponent, private CartService: CartService,
    private http :HttpClient
    ) {}


// we receive from shopComponents throught  cart.services the items whitch has been add in cart 
  ngOnInit() {
    this.CartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  @Output() onClose = new EventEmitter<any>();


  cart: Cart = { items: [] };

  // for the beautiful display in the basket ,it will be displayed in rows and columns !
  // we need to set correct the rows and colums in cart.component 
  displayedColumns: Array<string> = [
    'nameProduct',
    'brandProduct',
    'priceProduct',
    'imgProduct',
    'quantityProduct',
    'total',
    'action',
  ];

  public dataSource: Array<CartItem> = [];

  toggle() {
    this.onClose.emit();
  }
// we call total for all elemts in cart 
  getTotal(items: Array<CartItem>): number {
    return this.CartService.getTotal(items);
  }


  onClearCart ()
  {
    this.CartService.clearCart()
  }


removeOneItem(item:CartItem):void
{

this.CartService.removeOneItem(item)

}

  removeQuantity(item:CartItem):void
  {
this.CartService.removeQuantity(item)

  }


  onAddQuantity(item:CartItem):void
  {

    this.CartService.addToCart(item)
  }


  onCheckout():void
  {
    this.http.post('http://localhost:4242/checkout',{
items:this.cart.items

    }).subscribe(async(res:any)=>
    {
let stripe = await loadStripe("pk_live_51MHWCKLTuCeHnDU510NHVhalHU2f4AABgdVI25Yq4z9TGxC7MVB82fj7UYePYNVNIas0WkJy9TKeUlGgzFnxLv0T00A3fnY65p");
stripe?.redirectToCheckout({
sessionId:res.id


})
    }
    )



  }

}
