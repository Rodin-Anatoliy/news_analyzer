# Что творится в мире?
Анализа происходящих в мире событий. Насколько популярны новости на определённую тему. Дипломный проект курса фронтенд-разработчик от Яндекс.Практикума.
#

[Ссылка на рабочую версию проекта](https://rodin-anatoliy.github.io/news_analyzer/)

Версия проекта v0.0.8

Дизайн макета предоставлен [Яндекс.Практикум](https://praktikum.yandex.ru/)

## Как это должно работать?

Пользователь вводит в строку поиска ключевые слова, по которым хочет найти новости. Это обязательное поле. Если оставить его пустым, сайт должен показать ошибку.

По нажатию кнопки «Искать» сайт выполняет два действия:

- находит все статьи по запросу за последнюю неделю и отрисовывает карточки с новостями;
- подсчитывает статистику: сколько новостей вышло в каждый из последних семи дней. Статистику нужно отрисовать на отдельной странице.

## В проекте реализовано:
- 1 HTML и СSS вёрстка
- 2 реализация функционала через JavaScript (в разработке)
- 3 оптимизация кода через Webpack
- 4 настройка двух сборок build и dev

### 1 HTML и СSS вёрстка:
- HTML5 и СSS3
- наименование стилей по БЭМ
- flex-box вёрстка
- grid вёрстка
- позиционирование элементов
- анимации и трансформации
- файловая структура поекта по БЭМ
- адаптация страницы под различне разрешения

### 2 Реализация функционала через JavaScript (в разработке):
- Нативный JavaScript ES2015 (ES6)
- ООП
- API, асинхронность
- LocalStorage и sessionStorage

### 3.1 Оптимизация кода через Webpack:
- хеширование CSS и JS-файлов
- автоматическое обновление страницы проекта при сохранении файлов (hot reload)
- оптимизирована работа с изображениями (плагины file-loader и image-webpack-loader)
- оптимизация JS кода (траспиляция через babel)
- оптимизация CSS кода
- подключение статических изображений
- оптимизация работы со шрифтами

### 3.2 Пакеты из NPM, использованные в проекте:

**Для работы с кодом:**
- babel-loader,
- babel-cli,
- babel-core,
- babel-preset-env,
- core-js,
- babel-polyfill,
- mini-css-extract-plugin,
- optimize-css-assets-webpack-plugin,
- css-loader,
- html-webpack-plugin,
- postcss-loader,
- autoprefixer,
- cssnano.

**Для работы вебпака:**
- gh-pages,
- webpack-md5-hash,
- webpack,
- webpack-cli,
- webpack-dev-server,
path.

**Для работы с изображениями:**
- file-loader,
- image-webpack-loader.

## 4 Для установки:
1. [Склонировать](https://git-scm.com/book/ru/v2/Appendix-C%3A-%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-Git-%D0%9A%D0%BB%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B5%D0%B2) репозиторий на локальный компьютер
1. После распаковки, в директории проекта выполнить команду: 

    ```npm install``` 
(должен быть установлен [Node.js](https://nodejs.org/en/))
2. После установки зависимостей,в директории проекта для режима разработкм (dev mode), выполнить:
    ```npm run dev```
3. Для получения production (prod mode) версии проекта в директории проекта, выполнить:
    ```npm run build```
4. Созданная папка **dist** является production версией проекта  
![Code example](https://bitbucket.org/cupcakedev/cupcake-injection-npm/src/master/images/code_example.png)​  
![Page example 1](https://bitbucket.org/cupcakedev/cupcake-injection-npm/src/master/images/page_example_1.png "Page example 1")​  
![page example 1](https://bitbucket.org/cupcakedev/cupcake-injection-npm/src/master/images/page_example_2.png "page example 2")​  
