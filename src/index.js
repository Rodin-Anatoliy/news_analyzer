import './index.css';
import {NewsCard} from './js/components/NewsCard';
import {CardList} from './js/components/CardList';
import {NewsApi} from './js/modules/NewApi';
import {DataStorage} from './js/modules/DataStorage';

// fetch('https://newsapi.org/v2/everything?q=Беларусь&from=2020-08-07&to=2020-08-12&pageSize=100', {
//     headers: {
//         'X-Api-Key': '2356832b0876432c8814987efd07620a',
//     }
// })

const newsStorage = new DataStorage('local_news');
const newsApi = new NewsApi();
const searchForm = document.querySelector('.search');
const createNewsCard = (obj) => new NewsCard(obj).create();
const newsContainer = document.querySelector('.news-cards');
const newsCardList = new CardList(newsContainer, createNewsCard);
const buttonShowMore = document.querySelector('.button_show-more');

function showMore(newsCardList, newsData) {
    newsCardList.render(newsData.getData().slice(0, 3));
    newsData.saveData(newsData.getData().slice(3));
    if (newsCardList.container.childElementCount >= newsData.getData().length) {
        buttonShowMore.style.display = 'none';
    }
}

function searchInput() {
    //перенести функционал из слушателя сабмита в отдельную функцию
}

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const results = document.querySelector('.results');
    const loader = document.querySelector('.loading');
    const founds = document.querySelector('.founds');
    const notFound = document.querySelector('.not-found');
    const query = searchForm.elements[0].value;

    if (query) {
        results.style.display = 'flex';
        loader.style.display = 'flex';
        founds.style.display = 'none';
        notFound.style.display = 'none';
        newsContainer.innerHTML = '';
        

        newsApi.getNews(query)
        .then(data => {
            newsStorage.saveData(data.articles);
        })
        .then(() => {
            showMore(newsCardList, newsStorage);
        })
        .then(() => {
            loader.style.display = 'none';
            if (newsStorage.getData()[0]) {
                founds.style.display = 'flex';
            } else {notFound.style.display = 'flex'};
            //вернуть изменения после информировния о пустом поле поиска
            //searchInputField.placeholder = 'Введите тему новости';
        });
    } else {
        //вывести информацию о том что поле поиска пустое
        //searchInputField.placeholder = 'Строка запроса пустая';
    }   
})

buttonShowMore.addEventListener('click', () => {
    showMore(newsCardList, newsStorage);
});


