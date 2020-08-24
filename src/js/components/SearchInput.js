export function searchInput(event, constants, newsApi, articlesStorage, showMore, newsCardList) {

    event.preventDefault();

    if (constants.searchForm.elements[0].value) {
        constants.results.style.display = 'flex';
        constants.loader.style.display = 'flex';
        constants.founds.style.display = 'none';
        constants.notFound.style.display = 'none';
        constants.newsContainer.innerHTML = '';
        constants.error.style.display = 'none';
        articlesStorage.addIput(constants.searchForm.elements[0].value);

        newsApi.getNews(constants.searchForm.elements[0].value, 6, 0, constants)
        .then(data => {
            articlesStorage.saveData(data.articles);
        })
        .then(() => {
            if (articlesStorage.getData()[0]) {
                showMore(newsCardList, articlesStorage);
            };
        })
        .then(() => {
            constants.loader.style.display = 'none';
            if (articlesStorage.getData()[0]) {
                constants.founds.style.display = 'flex';
            } else {constants.notFound.style.display = 'flex'};  
        });
    } else {
        constants.error.style.display = 'flex';
        constants.newsContainer.innerHTML = '';
        constants.results.style.display = 'none';
    }   
}