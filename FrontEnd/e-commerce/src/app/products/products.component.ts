import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  productsArray = [
    {
      userId: 1,
      id: 1,
      title: 'T-shirt',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      imgUrl: 'https://via.placeholder.com/600/771796',
      price: '30$',
    },
    {
      userId: 1,
      id: 2,
      title: 'Jacket',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      imgUrl: 'https://via.placeholder.com/300/771796',
      price: '60$',
    },
    {
      userId: 1,
      id: 3,
      title: 'Trouser',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      imgUrl: 'https://via.placeholder.com/500/771796',
      price: '120$',
    },
    {
      userId: 1,
      id: 4,
      title: 'Boxar',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price:"20$",
    },
    {
      userId: 1,
      id: 5,
      title: 'Suit',
      body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price:"55$",
    },
    {
      userId: 1,
      id: 6,
      title: 'Skirt',
      body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price:"70$",
    },
    {
      userId: 1,
      id: 7,
      title: 'dresse',
      body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price:"80$",
    },
    {
      userId: 1,
      id: 8,
      title: 'Shose',
      body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price:"60$",
    },
    {
      userId: 1,
      id: 9,
      title: 'boot',
      body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price:"80$",
    },
    {
      userId: 1,
      id: 10,
      title: 'Sweater ',
      body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error',
      imgUrl: 'https://via.placeholder.com/400/771796',
      price:"90$",
    },
  ];
}