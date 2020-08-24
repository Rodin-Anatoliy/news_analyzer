import './analytics.css';

import {NewsApi} from '../js/modules/NewApi';
import {DataStorage} from '../js/modules/DataStorage';
import {constants} from '../js/constants';
import {accordance} from '../js/utils/accordance';

const newsStorage = new DataStorage('local_news_info');
const newsApi = new NewsApi();
const today = new Date();
const input = localStorage.getItem('input');

newsApi.getNews(localStorage.getItem('input'))
.then(data => {
    newsStorage.saveData(data);
})
.then(() => {
    constants.analyticsNumbers[0].textContent = newsStorage.getData().totalResults;
    constants.analyticsNumbers[1].textContent = Math.floor(accordance(newsStorage.getData().articles, input, 'title') * 0.01 * newsStorage.getData().totalResults);
    constants.titleAnalytics.textContent = `Вы спросили: «${localStorage.getItem('input')}»`;

    return Math.floor(accordance(newsStorage.getData().articles, input, 'title', 'description') * 0.01 * newsStorage.getData().totalResults);
})
.then((totalAccordance) => {
    for (let i = 0; i < 7; i++) {
        const day = new Date(Date.parse(today) - i * 86400000);
        constants.daysWeek[6 - i].textContent = `${day.getDate()}, ${constants.week[day.getDay()]}`;
        newsApi.getNews(localStorage.getItem('input'), i, i)
        .then((data) => {
            constants.daysAccordance[6 - i].textContent = Math.floor(accordance(data.articles, input, 'title') * 0.01 * data.totalResults);
            constants.daysAccordance[6 - i].style.width = `${Math.floor((accordance(data.articles, input, 'title') * 0.01 * data.totalResults) / totalAccordance * 100)}%`;
        });
    
    }
    constants.graphicMonth.textContent = `дата (${constants.months[today.getMonth()]})`;
});
