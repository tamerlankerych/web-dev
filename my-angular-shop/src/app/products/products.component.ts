import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'iPhone 15 Pro',
      description: 'Мощный смартфон с A17 Bionic',
      image: 'assets/iphone15pro.jpg', // Ссылка на изображение
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/iphone-15-pro'
    },
    {
      name: 'MacBook Pro M3',
      description: 'Ноутбук для профессионалов',
      image: 'assets/macbook.jpg', // Ссылка на изображение
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/macbook-pro-m3'
    }
  ];

  share(platform: string, link: string) {
    const urls: { [key: string]: string } = {
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(link)}`
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  }
}
