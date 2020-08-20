import './about.css';
import {CommitCard} from '../js/components/CommitCard';
import {CardList} from '../js/components/CardList'
import {GithubApi} from '../js/modules/GithubApi';
import {DataStorage} from '../js/modules/DataStorage';

import swiper from '../js/swiper.js';

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

const commitsStorage = new DataStorage('local_commits');
const githubApi = new GithubApi();
githubApi.getCommits()
.then(data => {
    commitsStorage.saveData(data);
});

const commitsData = commitsStorage.getData().slice(-20);
const createCommitCard = (obj) => new CommitCard(obj).create();
const commitsContainer = document.querySelector('.github__commits-bar');
const commitCardList = new CardList(commitsContainer, createCommitCard);
commitCardList.render(commitsData);
