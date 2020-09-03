export class GithubApi {
    getCommits() {
        return fetch('https://api.github.com/repos/Rodin-Anatoliy/news_analyzer/commits')
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(console.log(`Ошибка: ${res.status}`));
        });
    }
}