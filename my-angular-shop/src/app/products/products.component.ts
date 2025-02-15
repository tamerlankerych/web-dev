import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent {
  products = [
    {
      name: 'iPhone 15 Pro',
      description: 'Мощный смартфон с A17 Bionic',
      image: 'assets/iphone15pro.jpg',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/iphone-15-pro'
    },
    {
      name: 'MacBook Pro M3',
      description: 'Ноутбук для профессионалов',
      image: 'assets/macbook.jpg',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/macbook-pro-m3'
    },
    {
      name: 'Samsung Galaxy S23 Ultra',
      description: 'Флагманский смартфон от Samsung',
      image: 'assets/s23ultra.jpg',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra'
    },
    {
      name: 'PlayStation 5',
      description: 'Игровая консоль нового поколения',
      image: 'assets/ps5.jpg',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/playstation-5'
    },
    {
      name: 'Xiaomi Mi Band 7',
      description: 'Фитнес-браслет с AMOLED экраном',
      image: 'assets/miband7.jpg',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-band-7'
    },
    {
      name: 'Apple Watch Series 9',
      description: 'Умные часы с множеством функций',
      image: 'assets/applewatch9.jpg',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9'
    },
    {
      name: 'Sony WH-1000XM5',
      description: 'Беспроводные наушники с шумоподавлением',
      image: 'assets/sonywh1000xm5.jpg',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5'
    },
    {
      name: 'iPad Pro M2',
      description: 'Планшет для работы и творчества',
      image: 'assets/ipadpro.jpg',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/ipad-pro-m2'
    },
    {
      name: 'Asus ROG Strix G16',
      description: 'Игровой ноутбук с RTX 4060',
      image: 'assets/asusrog.jpg',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16'
    },
    {
      name: 'DJI Mini 3 Pro',
      description: 'Компактный дрон с отличной камерой',
      image: 'assets/djimini3.jpg',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/dji-mini-3-pro'
    }
  ];

  share(platform: 'whatsapp' | 'telegram', productName: string, productLink: string) {
    const message = `Посмотри ${productName} на Kaspi: ${productLink}`;
    const urls: { whatsapp: string; telegram: string } = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(message)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(productLink)}&text=${encodeURIComponent(message)}`
    };

    window.open(urls[platform], '_blank');
  }
}
