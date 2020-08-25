export class CommitCard {
    constructor(cardInfo) {
        this.cardInfo = cardInfo;
        this.card = null;
    }

    template() {
        const templateString = `<div class="commit swiper-slide">
        <p class="commit__date"></p>
        <div class="commit__author">
          <img class="commit__photo" alt="photo" src="">
          <div class="commit__info">
            <p class="commit__name"></p>
            <p class="commit__mail"></p>
          </div>
        </div>
        <p class="commit__text"></p>
      </div>`;
        const elem = document.createElement('div');
        elem.insertAdjacentHTML('beforeend', templateString.trim());
        return elem.firstChild;
    }

    create() {
        const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        const date = new Date(this.cardInfo.commit.committer.date);
        let avatarUrl = 'https://avatars3.githubusercontent.com/u/52788323?v=4';
        if (this.cardInfo.author) {
          avatarUrl = this.cardInfo.author.avatar_url;
        }
        this.card = this.template();
        this.card.querySelector('.commit__date').textContent = `${date.getUTCDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
        this.card.querySelector('.commit__photo').src = avatarUrl;
        this.card.querySelector('.commit__name').textContent = this.cardInfo.commit.committer.name;
        this.card.querySelector('.commit__mail').textContent = this.cardInfo.commit.committer.email;
        this.card.querySelector('.commit__text').textContent = this.cardInfo.commit.message;
        return this.card;
    }
}