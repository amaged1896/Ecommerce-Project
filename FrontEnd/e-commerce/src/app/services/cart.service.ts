import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // push in array
  userCart: any = []
  constructor() { }
}
