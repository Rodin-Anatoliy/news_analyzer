import './index.css';
import {NewsCard} from './js/components/NewsCard';
import {CardList} from './js/components/CardList';
import {NewsApi} from './js/modules/NewApi';
import {DataStorage} from './js/modules/DataStorage';
import {constants} from './js/constants';
import {searchInput} from './js/components/SearchInput';
import {showMore} from './js/utils/showMore';

const articlesStorage = new DataStorage('local_articles');
const newsApi = new NewsApi(constants.url, constants.key);
const createNewsCard = (obj) => new NewsCard(obj).create();
const newsCardList = new CardList(constants.newsContainer, createNewsCard);

if (localStorage.getItem('input')) {
    constants.searchForm.elements[0].value = localStorage.getItem('input');
    searchInput('', constants, newsApi, articlesStorage, showMore, newsCardList);
}

constants.searchForm.addEventListener('submit', (event) => {searchInput(event, constants, newsApi, articlesStorage, showMore, newsCardList)});
constants.buttonShowMore.addEventListener('click', () => {showMore(newsCardList, articlesStorage, constants)});

