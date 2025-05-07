import mendes from './assets/images/mendes.jpg';
import sadman from './assets/images/sadman.jpg';
import thngocbich from './assets/images/thngocbich.jpg';

export const renderDrinksSection = () => {
	const drinksSection = document.createElement('div');
	drinksSection.classList.add('card');

	const drinksList = document.createElement('div');
	drinksList.classList.add('item');

	const drinksHeading = document.createElement('h2');
	drinksHeading.textContent = 'Drinks';

	const drinksItems = [
		{
			name: 'Crimson Sunrise',
			description:
				'A vibrant blend of freshly squeezed orange juice, pineapple, and a hint of grenadine served chilled over ice for a burst of tropical energy.',
			price: 3,
			imageSrc: mendes,
		},
		{
			name: 'Midnight Mocha',
			description:
				'A rich fusion of bold espresso and smooth dark chocolate, accented with a touch of vanilla and topped with a swirl of whipped cream for an indulgent treat.',
			price: 2,
			imageSrc: sadman,
		},

		{
			name: 'Emerald Fizz',
			description:
				'A refreshing mix of crisp green tea, muddled mint, and sparkling soda water, garnished with a lemon twist for a revitalizing, herbaceous experience.',
			price: 4,
			imageSrc: thngocbich,
		},
	];

	drinksItems.forEach((item) => {
		const titleElement = document.createElement('h3');
		titleElement.textContent = item.name;

		const descriptionElement = document.createElement('p');
		descriptionElement.textContent = item.description;

		const priceElement = document.createElement('span');
		priceElement.textContent = '$' + item.price;

		const imgItem = document.createElement('img');
		imgItem.src = item.imageSrc;
		imgItem.alt = item.name;

		const drinkCard = document.createElement('div');
		drinkCard.classList.add('item_container');
		drinkCard.append(titleElement, descriptionElement, priceElement, imgItem);

		drinksList.append(drinkCard);
	});

	drinksSection.append(drinksHeading, drinksList);
	return drinksSection;
};
