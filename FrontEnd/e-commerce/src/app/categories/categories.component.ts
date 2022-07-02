import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private router: Router, private catService: CategoryService) {}
  ngOnInit(): void {
    this.getAllCategories();
  }
  testingCategoriesArray = [
    {
      userId: 1,
      id: 1,
      title: 'T-shirts',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      imgUrl: 'https://via.placeholder.com/600/771796',
    },
    {
      userId: 1,
      id: 2,
      title: 'Jackets',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      imgUrl: 'https://via.placeholder.com/300/771796',
    },
    {
      userId: 1,
      id: 3,
      title: 'Trousers',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      imgUrl: 'https://via.placeholder.com/500/771796',
    },
    {
      userId: 1,
      id: 4,
      title: 'Underwear',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
      imgUrl: 'https://via.placeholder.com/400/771796',
    },
    {
      userId: 1,
      id: 5,
      title: 'Suits',
      body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
      imgUrl: 'https://via.placeholder.com/400/771796',
    },
    {
      userId: 1,
      id: 6,
      title: 'Skirts',
      body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
      imgUrl: 'https://via.placeholder.com/400/771796',
    },
    {
      userId: 1,
      id: 7,
      title: 'dresses',
      body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
      imgUrl: 'https://via.placeholder.com/400/771796',
    },
    {
      userId: 1,
      id: 8,
      title: 'Shoes',
      body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
      imgUrl: 'https://via.placeholder.com/400/771796',
    },
    {
      userId: 1,
      id: 9,
      title: 'boots',
      body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
      imgUrl: 'https://via.placeholder.com/400/771796',
    },
    {
      userId: 1,
      id: 10,
      title: 'Sweaters ',
      body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error',
      imgUrl: 'https://via.placeholder.com/400/771796',
    },
  ];
  imgUrl: any = 'https://via.placeholder.com/600/771796';
  categoriesArray: any;
  openCategoryProducts(catId: number) {
    this.router.navigate(['/products', catId]);
  }
  getAllCategories() {
    this.catService.getAllCategories().subscribe((categories) => {
      this.categoriesArray = categories.data;
    });
  }
}

// this.catService
//       .getProductsByCatId(this.recivedCatId)
//       .subscribe((products) => {
//         this.filterdArray = products.data;
//       });
