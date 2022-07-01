import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  orderList = [
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
    }
  ];
}
