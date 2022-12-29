import {
  Component,
  ViewEncapsulation,
  Injectable,
  OnInit,
} from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from 'swiper';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from '../../services/cart.service';
import { DataService } from 'src/app/services/data.service';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',

  styleUrls: ['./shop.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ShopComponent implements OnInit {
  constructor(private CartService: CartService , private DataService:DataService) {}

  public arrayObject: Array<CartItem> = [

    {
      idProduct: 1,
      nameProduct: 'piano',
      brandProduct: 'Yamaha',
      priceProduct: 2000,
      imgProduct: 'assets/sliders/a.jpg',
      quantityProduct: 1,
      stockProduct :10
    },
    {
      idProduct: 2,
      nameProduct: 'microphone',
      brandProduct: 'LGS',
      priceProduct: 1000,
      imgProduct: 'assets/sliders/b.jpg',
      quantityProduct: 1,
  
      stockProduct :10
    },
    {
      idProduct: 3,
      nameProduct: 'drum',
      brandProduct: 'Pearl',
      priceProduct: 3000,
      imgProduct: 'assets/sliders/c.jpg',
      quantityProduct: 1,
      
      stockProduct :10
    },
    {
      idProduct: 4,
      nameProduct: 'microphone',
      brandProduct: 'SGR',
      priceProduct: 1400,
      imgProduct: 'assets/sliders/d.jpg',
      quantityProduct: 1,
      stockProduct :10
    },
    {
      idProduct: 5,
      nameProduct: 'Guitar',
      brandProduct: 'Cordoba',
      priceProduct: 1500,
      imgProduct: 'assets/sliders/e.jpg',
      quantityProduct: 1,
      stockProduct :10
    },
    {
      idProduct: 6,
      nameProduct: 'microphone',
      brandProduct: 'Snure',
      priceProduct: 1600,
      imgProduct: 'assets/sliders/f.jpg',
      quantityProduct: 1,
      stockProduct :10
    },
    {
      idProduct: 7,
      nameProduct: 'Guitar',
      brandProduct: 'Silvano',
      priceProduct: 1800,
      imgProduct: 'assets/sliders/g.jpg',
      quantityProduct: 1,
      stockProduct :10

    },
    {
      idProduct: 8,
      nameProduct: 'Violin',
      brandProduct: 'Antonio Stradivari',
      priceProduct: 100000,
      imgProduct: 'assets/sliders/h.jpg',
      quantityProduct: 1,
      stockProduct :10
    },
  ];
    
  

  public _cart: Cart = { items: [] };
  itemsQuantity = 0;
  ngOnInit() 
  {
        this.CartService.cart.subscribe((_cart :any) => {
          this.cart = _cart;
        });

  
  this.gedData()
 

  }


gedData ()
{
// this.DataService.getData().subscribe((data)=> console.log(data) )
this.DataService.getData().subscribe((data:any)=> {

this.arrayObject=data


} )

}




  showCart = false;


  get cart(): Cart
   {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items.map((item :any) => item.quantityProduct)
      .reduce((prev :any, current:any) => prev + current, 0);
  }




    // add
    addOnCart(obj: Product): void {
      this.CartService.addToCart(
        {
        idProduct: obj.idProduct,
        nameProduct: obj.nameProduct,
        brandProduct: obj.brandProduct,
        priceProduct: obj.priceProduct,
        imgProduct: obj.imgProduct,
        quantityProduct: 1,
        stockProduct: obj.stockProduct
      }

      );
    }

      toggleCart()
      {
        this.showCart = !this.showCart;
      }


    // method for total price 
      getTotal(items: Array<CartItem>): number
      {
        return this.CartService.getTotal(items);
      }

      onClearCart() 
      {
        this.CartService.clearCart();
      }
// config for swiper !
      swiperConfig: any = {
        breakpoints: {
          1000: {
            spaceBetween: 20,
            slidesPerView: 3,
            Pagination: true,
            Scrollbar: true,
            Navigation: true,
          },
          600: {
            spaceBetween: 14,
            slidesPerView: 2,
            Pagination: true,
            Scrollbar: true,
            Navigation: true,
          },

          0: {
            spaceBetween: 10,
            slidesPerView: 1,
            Pagination: true,
            Scrollbar: true,
            Navigation: true,
          },
        },
      };
}
