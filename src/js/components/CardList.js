export class CardList {

	constructor(container, createCard) {
		this.container = container;
		this.createCard = createCard;
	}

	addCard(cardElement) {
		this.container.appendChild(cardElement);
	}

	render(cardsInfo) {
		cardsInfo.forEach((obj) => {
			this.addCard(this.createCard(obj))
		});
	}

}