export function searchInput(event, constants, newsApi, newsStorage, showMore, newsCardList) {
    //перенести функционал из слушателя сабмита в отдельную функцию
    event.preventDefault();

    if (constants.searchForm.elements[0].value) {
        constants.results.style.display = 'flex';
        constants.loader.style.display = 'flex';
        constants.founds.style.display = 'none';
        constants.notFound.style.display = 'none';
        constants.newsContainer.innerHTML = '';
        constants.error.style.display = 'none';

        newsApi.getNews(constants.searchForm.elements[0].value)
        .then(data => {
            newsStorage.saveData(data.articles);
        })
        .then(() => {
            showMore(newsCardList, newsStorage);
        })
        .then(() => {
            constants.loader.style.display = 'none';
            if (newsStorage.getData()[0]) {
                constants.founds.style.display = 'flex';
            } else {constants.notFound.style.display = 'flex'};  
        });
    } else {
        constants.error.style.display = 'flex';
        constants.newsContainer.innerHTML = '';
        constants.results.style.display = 'none';
    }   
}