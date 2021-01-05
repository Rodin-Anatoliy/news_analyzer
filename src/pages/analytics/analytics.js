import './analytics.css';

import {NewsApi} from '../../js/modules/NewApi';
import {DataStorage} from '../../js/modules/DataStorage';
import {constants} from '../../js/constants';
import {accordance} from '../../js/utils/accordance';

const newsStorage = new DataStorage('local_news_info');
const newsApi = new NewsApi(constants);
const today = new Date();
const input = sessionStorage.getItem('input');

constants.analyticsNumbers[0].textContent = '';
constants.analyticsNumbers[1].textContent = '';
constants.titleAnalytics.textContent = '';
constants.graphicMonth.style.opacity = 0;
for (let i = 0; i < 7; i++) {
    constants.daysAccordance[6 - i].classList.remove('animation');
    constants.daysAccordance[6 - i].textContent = '';
    constants.daysAccordance[6 - i].style.width = `0%`;
    constants.daysAccordance[6 - i].style.opacity = 0;
    constants.daysWeek[6 - i].style.opacity = 0;
}

newsApi.getNews(sessionStorage.getItem('input'))
.then(data => {
    newsStorage.saveData(data);
})
.then(() => {
    constants.analyticsNumbers[0].textContent = newsStorage.getData().totalResults;
    constants.analyticsNumbers[0].classList.add('animation');
    constants.analyticsNumbers[1].textContent = Math.ceil(accordance(newsStorage.getData().articles, input, 'title') * 0.01 * newsStorage.getData().totalResults);
    constants.analyticsNumbers[1].classList.add('animation');
    constants.titleAnalytics.textContent = `«${sessionStorage.getItem('input')}»`;
    constants.titleAnalytics.classList.add('animation');

    return Math.ceil(accordance(newsStorage.getData().articles, input, 'title', 'description') * 0.01 * newsStorage.getData().totalResults);
})
.then((totalAccordance) => {
    for (let i = 0; i < 7; i++) {
        const day = new Date(Date.parse(today) - i * 86400000);
        constants.daysWeek[6 - i].textContent = `${day.getDate()}, ${constants.week[day.getDay()]}`;
        constants.daysWeek[6 - i].classList.add('animation');
        newsApi.getNews(sessionStorage.getItem('input'), i, i)
        .then((data) => {
            constants.daysAccordance[6 - i].textContent = Math.ceil(accordance(data.articles, input, 'title') * 0.01 * data.totalResults);
            constants.daysAccordance[6 - i].style.width = `${Math.ceil((accordance(data.articles, input, 'title') * 0.01 * data.totalResults) / totalAccordance * 100)}%`;
            constants.daysAccordance[6 - i].classList.add('animation');
        });
    
    }
    constants.graphicMonth.textContent = `дата (${constants.months[today.getMonth()]})`;
    constants.graphicMonth.classList.add('animation');
})
.catch(error => {
    constants.loader.style.display = 'none';
    constants.errorApi.style.display = 'flex';
    console.log(error);
});
