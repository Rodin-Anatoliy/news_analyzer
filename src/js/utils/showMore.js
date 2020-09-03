export function showMore(newsCardList, newsData, constants) {
    newsCardList.render(newsData.getData().slice(0, 3));
    newsData.saveData(newsData.getData().slice(3));
    if (newsData.getData().length === 0) {
        constants.buttonShowMore.style.display = 'none';
    }
}