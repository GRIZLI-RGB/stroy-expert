## 1. Установка, запуск и сборка

- `npm install` - установить все зависимости (выполнить в первую очередь)
- `gulp` - запустить сервер разработки (по умолчанию http://localhost:3000)
- `gulp build` - собрать проект (выходная папка - *dist*)

## 2. Архитектура проекта
| Каталог/файл | Описание |
| ------ | ------ |
| **dist** | Выходной каталог сборки |
| **app** | Корневой каталог |
| **app/index.html** | Главная страница |
| **app/css** | Генерируемый сборкой CSS-код (переводится из SCSS в Real-Time) |
| **app/fonts** | Шрифты |
| **app/images** | Изображения, иконки |
| **app/js** | Javascript (в данном случае только настройки слайдера) |
| **app/libs** | Библиотеки (в данном случае Swiper.js)  |
| **app/pages** | Страницы сайта |
| **app/pages/service.html** | Страница услуги |
| **app/scss** | Каталог стилей SCSS |
| **app/scss/_fonts.scss** | Стили SCSS для подключения шрифтов |
| **app/scss/_globals.scss** | Стили SCSS для определения глобальных классов |
| **app/scss/_media.scss** | Стили SCSS для медиа-запросов (адаптив) |
| **app/scss/reset.scss** | Стили SCSS для сброса стандартных браузерных стилей |
| **app/scss/index.scss** | Стили SCSS, основной файл, подключает другие и содержит в себе стили блоков всех страниц |