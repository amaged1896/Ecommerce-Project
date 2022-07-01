import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
// import { faCrown } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //add to cart
  constructor(private cart: CartService) { }
  cartNum = this.cart.userCart
  //add to cart

  ngOnInit(): void {
  }
  faCoffee = faCoffee;
  faCrown = faCrown;
}
