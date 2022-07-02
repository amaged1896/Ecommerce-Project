import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  recivedCatId: any ;

  //array before filteration
  productsArray = [
    {
      userId: 1,
      id: 1,
      catId: 1,
      title: 'T-shirt',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      imgUrl: 'https://via.placeholder.com/600/771796',
      price: '30$',
    },
    {
      userId: 1,
      id: 2,
      catId: 1,
      title: 'Jacket',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      imgUrl: 'https://via.placeholder.com/300/771796',
      price: '60$',
    },
    {
      userId: 1,
      id: 3,
      catId: 1,
      title: 'Trouser',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      imgUrl: 'https://via.placeholder.com/500/771796',
      price: '120$',
    },
    {
      userId: 1,
      id: 4,
      catId: 2,
      title: 'Boxar',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price: '20$',
    },
    {
      userId: 1,
      id: 5,
      catId: 2,
      title: 'Suit',
      body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price: '55$',
    },
    {
      userId: 1,
      id: 6,
      catId: 2,
      title: 'Skirt',
      body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price: '70$',
    },
    {
      userId: 1,
      id: 7,
      catId: 2,
      title: 'dresse',
      body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price: '80$',
    },
    {
      userId: 1,
      id: 8,
      catId: 2,
      title: 'Shose',
      body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price: '60$',
    },
    {
      userId: 1,
      id: 9,
      catId: 3,
      title: 'boot',
      body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price: '80$',
    },
    {
      userId: 1,
      id: 10,
      catId: 3,
      title: 'Sweater ',
      body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price: '90$',
    },
  ];
  // array after filtiration
  filterdArray:any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cart: CartService,
    private prdService: ProductService
  ) {}

  ngOnInit(): void {
    this.recivedCatId = this.activatedRoute.snapshot.paramMap.get('catId')

    this.filterCatProducts();
  }
  // 1- add to cart
  AddToCart(product: any) {
    // push in array
    this.cart.userCart.push(product);
    //
  }
  // filterCatProducts() {
  //   this.filterdArray = this.productsArray.filter(
  //     (el) => el.catId == this.recivedCatId
  //   );
  // }
  filterCatProducts() {
    this.prdService
      .getProductsByCatId(this.recivedCatId)
      .subscribe((products) => {
        this.filterdArray = products.data;
      });
  }
}
