import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cartService/cart.service';
import { HttpService } from 'src/app/services/httpService/http.service';
import { HEART_ICON, STAR_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit,OnDestroy {

  subscription: Subscription = new Subscription();
  selectBook: any;
  bookData: any;
  bookId!: number;
  count: number = 1;
  bookCount: boolean = false;
  cartId!: number;
  tempcart: any[] = [];
  cartForm!: FormGroup;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private httpService: HttpService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {
    iconRegistry.addSvgIconLiteral(
      'heart-icon',
      sanitizer.bypassSecurityTrustHtml(HEART_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'star-icon',
      sanitizer.bypassSecurityTrustHtml(STAR_ICON)
    );
  }

  ngOnInit(): void {
    this.httpService.getBooksApi().subscribe((res1: any) => {
      this.bookData = res1.data;
  
      this.route.params.subscribe((res2) => {
        this.selectBook = this.bookData.find((e: any) => e.bookId == res2['bookId']);
      });
    });
  }

  handleAddBook(data: any) {

    this.cartForm = this.formBuilder.group({
      bookId: data.bookId,   
      quantity: 1,
      isWishlist: false
    });

    const { quantity, bookId, isWishlist } = this.cartForm.value;

    const cartItem = {
      bookId: bookId,   
      quantity: quantity,
      isWishlist: isWishlist
    };

    this.cartService.addToCartApi(cartItem).subscribe(
      (res) => console.log('Added to cart:', res),
      (err) => console.error('Error adding to cart:', err)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
