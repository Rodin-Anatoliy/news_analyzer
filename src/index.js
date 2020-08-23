import './index.css';
import {NewsCard} from './js/components/NewsCard';
import {CardList} from './js/components/CardList';
import {NewsApi} from './js/modules/NewApi';
import {DataStorage} from './js/modules/DataStorage';
import {constants} from './js/constants';
import {searchInput} from './js/components/SearchInput';
import {showMore} from './js/utils/showMore';

// fetch('https://newsapi.org/v2/everything?q=Беларусь&from=2020-08-07&to=2020-08-12&pageSize=100', {
//     headers: {
//         'X-Api-Key': '2356832b0876432c8814987efd07620a',
//     }
// })

const newsStorage = new DataStorage('local_news');
const newsApi = new NewsApi();
const createNewsCard = (obj) => new NewsCard(obj).create();
const newsCardList = new CardList(constants.newsContainer, createNewsCard);

constants.searchForm.addEventListener('submit', (event) => {searchInput(event, constants, newsApi, newsStorage, showMore, newsCardList)});
constants.buttonShowMore.addEventListener('click', () => {showMore(newsCardList, newsStorage)});

// 1) Не реализован метод по добавлению обработчиков событий - _setHandlers
// 2) searchInput - не класс, а функция
// 3) Не рализован класс Statistics (не рализован функционал страницы аналитики)
