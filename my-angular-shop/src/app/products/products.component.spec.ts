import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'iPhone 15 Pro',
      description: 'Мощный смартфон с A17 Bionic',
      image: 'assets/iphone15pro.jpg',  // Путь к изображению
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/iphone-15-pro'
    },
    {
      name: 'MacBook Pro M3',
      description: 'Ноутбук для профессионалов',
      image: 'assets/macbook.jpg',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/macbook-pro-m3'
    }
  ];

  share(platform: string, productName: string) {
    const urls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`Посмотри ${productName} на Kaspi: `)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent('Посмотри ' + productName + ' на Kaspi: ')}`
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  }
}
