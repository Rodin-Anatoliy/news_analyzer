import './about.css';
import {CommitCard} from '../js/components/CommitCard';
import {CardList} from '../js/components/CardList'
import {GithubApi} from '../js/modules/GithubApi';
import {DataStorage} from '../js/modules/DataStorage';
import {constants} from '../js/constants';

import swiper from '../js/swiper.js';

const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 16,
    initialSlide: 0,
    //loop: true,
  
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

    observer: true,
})

const createCommitCard = (obj) => new CommitCard(obj).create();
const commitCardList = new CardList(constants.commitsContainer, createCommitCard);
const commitsStorage = new DataStorage('local_commits');
const githubApi = new GithubApi();
githubApi.getCommits()
.then(data => {
    commitsStorage.saveData(data);
})
.then(() => {
  const commitsData = commitsStorage.getData().slice(-20);
  
  commitCardList.render(commitsData);
})
.catch(error => {
  constants.loader.style.display = 'none';
  constants.errorApi.style.display = 'flex';
  console.log(error);
});


