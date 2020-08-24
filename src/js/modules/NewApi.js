export class NewsApi {
    getNews(query, dayFrom = 6, dayTo = 0) {
        const today = new Date();
        const dateTo = new Date(Date.parse(today) - dayTo * 86400000);
        const dateFrom = new Date(Date.parse(today) - dayFrom * 86400000);
        return fetch(`https://nomoreparties.co/news/v2/everything?q=${query}&from=${dateTo.getFullYear()}-${dateTo.getMonth() + 1}-${dateTo.getDate()}&to=${dateFrom.getFullYear()}-${dateFrom.getMonth() + 1}-${dateFrom.getDate()}&pageSize=100&apiKey=2356832b0876432c8814987efd07620a`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            constants.errorApi.style.display = 'flex';
            return Promise.reject(console.log(`Ошибка: ${res.status}`));
        })
        .catch(error => {
            constants.errorApi.style.display = 'flex';
            console.log(error);
        });
    }
}