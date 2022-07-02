import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getProductsByCatId(catId:number):Observable<any>{
    return this.httpClient.get(`${environment.APIURL}/product/cat-products/${catId}`);
  }
}
