import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Добавляем поддержку директив типа *ngFor
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component'; // Импорт компонента товаров

@NgModule({
  declarations: [
    AppComponent, // Главный компонент приложения
    ProductsComponent // Компонент с товарами
  ],
  imports: [
    BrowserModule, // Браузерные модули для работы Angular
    CommonModule // Подключаем поддержку директив (например, *ngFor)
  ],
  providers: [], // Сервисы можно добавлять сюда
  bootstrap: [AppComponent] // Основной компонент, с которого стартует приложение
})
export class AppModule { }

