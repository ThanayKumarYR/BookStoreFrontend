import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantity: number = 1;
  cartList: any[] = [];
  subscription: Subscription = new Subscription();

  constructor(private cartService: CartService,private router:Router) {}

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  placeOrder(){
    this.router.navigate(["/dashboard/order"])
  }

  ngOnInit(): void {
    this.cartService.getCartApi().subscribe((res: any) => {
      this.cartList = res.data;
      console.log(this.cartList);
  });
  }

  removeItem(data: any){
    this.cartService.unCartApi(data).subscribe(() => {
      this.cartList = this.cartList.filter(item => item.cartId !== data);
    }, error => {
      console.error('Error uncataloging the item', error);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
