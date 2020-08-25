export function searchInput(event, constants, newsApi, articlesStorage, showMore, newsCardList) {
    if (event) {
        event.preventDefault();
    }

    if (constants.searchForm.elements[0].value) {
        constants.results.style.display = 'flex';
        constants.loader.style.display = 'flex';
        constants.founds.style.display = 'none';
        constants.notFound.style.display = 'none';
        constants.newsContainer.innerHTML = '';
        constants.error.style.display = 'none';
        constants.searchForm.elements[0].disabled = 1;
        constants.searchForm.elements[1].disabled = 1;
        constants.searchForm.style.opacity = 0.8;
        
        newsApi.getNews(constants.searchForm.elements[0].value, 6, 0, constants)
        .then(data => {
            articlesStorage.addIput(constants.searchForm.elements[0].value);
            articlesStorage.saveData(data.articles);
        })
        .then(() => {
            if (articlesStorage.getData()[0]) {
                showMore(newsCardList, articlesStorage, constants);
            };
        })
        .then(() => {
            constants.searchForm.elements[0].disabled = 0;
            constants.searchForm.elements[1].disabled = 0;
            constants.searchForm.style.opacity = 1;
            constants.loader.style.display = 'none';
            if (articlesStorage.getData()[0]) {
                constants.founds.style.display = 'flex';
            } else {constants.notFound.style.display = 'flex'};  
        })
        .catch(error => {
            constants.loader.style.display = 'none';
            constants.errorApi.style.display = 'flex';
            console.log(error);
        });
    } else {
        constants.error.style.display = 'flex';
        constants.newsContainer.innerHTML = '';
        constants.results.style.display = 'none';
    }   
}