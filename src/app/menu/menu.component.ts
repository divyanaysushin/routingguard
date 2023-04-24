import { Component } from '@angular/core';
import { Menu } from 'src/models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus =[
    {
      id: 1,
      name: 'Crab Louie',
      image: 'assets/images/product41.png',
      price: 110.50
    },
    {
      id: 2,
      name: 'Orzo salad',
      image: 'assets/images/product5.png',
      price: 90.99
    },
    {
      id: 3,
      name: 'Acar',
      image: 'assets/images/product6.png',
      price: 120.99
    },
    {
      id: 4,
      name: 'Pasta',
      image: 'assets/images/product7.png',
      price: 120.99
    },
    {
      id: 5,
      name: 'Paneer',
      image: 'assets/images/product8.png',
      price: 120.99
    },
    {
      id: 6,
      name: 'Beef Bisque',
      image: 'assets/images/product9.png',
      price: 120.99
    },
    {
      id: 7,
      name: 'Greek Salad',
      image: 'assets/images/product10.png',
      price: 120.99
    },
    {
      id: 8,
      name: 'Lobster Roll',
      image: 'assets/images/product11.png',
      price: 120.99
    },
    {
      id: 9,
      name: 'caesar',
      image: 'assets/images/product12.png',
      price: 130.99
    }
  ];
}
