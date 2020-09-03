export class NewsApi {
    constructor(constants) {
        this.url = constants.url;
        this.key = constants.key;
        this.language = constants.language;
    }
    
    getNews(query, dayFrom = 6, dayTo = 0) {
        const today = new Date();
        const dateTo = new Date(Date.parse(today) - dayTo * 86400000);
        const dateFrom = new Date(Date.parse(today) - dayFrom * 86400000);
        return fetch(`${this.url}everything?q=${query}&language=${this.language}&from=${dateTo.getFullYear()}-${dateTo.getMonth() + 1}-${dateTo.getDate()}&to=${dateFrom.getFullYear()}-${dateFrom.getMonth() + 1}-${dateFrom.getDate()}&pageSize=100&apiKey=${this.key}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(console.log(`Ошибка: ${res.status}`));
        });
    }
}