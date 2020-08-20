export class NewsCard {
    constructor(cardInfo) {
        this.news = cardInfo;
        this.card = null;
    }

    template() {
        const templateString = `<div class="card">
            <img class="card__image" src="" alt="image"> 
            <div class="card__news-info">
                <p class="card__date"></p>
                <h3 class="card__title"></h3>
                <p class="card__description"></p>
                <p class="card__source"></p>
            </div>
        </div>`;
        const elem = document.createElement('div');
        elem.insertAdjacentHTML('beforeend', templateString.trim());
        return elem.firstChild;
    }

    create() {
        const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        const date = new Date(this.news.publishedAt);
        if (!this.news.urlToImage) {this.news.urlToImage = require('../../images/news_image.jpg').default;}
        this.card = this.template();
        this.card.querySelector('.card__image').src = this.news.urlToImage;
        this.card.querySelector('.card__date').textContent = `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
        this.card.querySelector('.card__title').textContent = this.news.title;
        this.card.querySelector('.card__description').textContent = this.news.description;
        this.card.querySelector('.card__source').textContent = this.news.source.name;
        return this.card;
    }
}