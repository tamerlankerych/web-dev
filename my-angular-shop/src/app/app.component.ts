import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component'; // ✅ Импортируем ProductsComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent], // ✅ Добавляем сюда
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}
