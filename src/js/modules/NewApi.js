export class NewsApi {
    getNews(query) {
        const dateTo = new Date();
        const dateFrom = new Date(Date.parse(dateTo) - 7 * 86400000);
        return fetch(`https://nomoreparties.co/news/v2/everything?q=${query}&from=${dateTo.getFullYear()}-${dateTo.getMonth() + 1}-${dateTo.getDate()}&to=${dateFrom.getFullYear()}-${dateFrom.getMonth() + 1}-${dateFrom.getDate()}&pageSize=100&apiKey=2356832b0876432c8814987efd07620a`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(console.log(`Ошибка: ${res.status}`));
        })
        .catch(error => console.log(error));
    }
}