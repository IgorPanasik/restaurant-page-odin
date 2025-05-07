import caesar from './assets/images/caesar.webp';
import fusion from './assets/images/fusion.webp';
import hamburger from './assets/images/hamburger.webp';

export const renderDishesSection = () => {
	const dishesSection = document.createElement('div');
	dishesSection.classList.add('card');

	const dishesHeading = document.createElement('h2');
	dishesHeading.textContent = 'Dishes';

	const dishesList = document.createElement('div');
	dishesList.classList.add('item');

	const dishesItems = [
		{
			name: 'Caesar Salad',
			description:
				"Crisp romaine lettuce tossed in a tangy, creamy Caesar dressing, topped with crunchy garlic croutons and a sprinkle of shaved Parmesan—an all-time classic that's both refreshing and delicious.",
			price: 5,
			imageSrc: caesar,
		},
		{
			name: 'Hamburger',
			description:
				'A juicy grilled beef patty layered with melted cheese, fresh lettuce, ripe tomato, and tangy pickles, all nestled between a soft toasted bun. Every bite delivers a satisfying mix of textures and flavors.',
			price: 2,
			imageSrc: hamburger,
		},

		{
			name: 'Fusion Dish with Fried Egg',
			description:
				'An inventive blend of culinary traditions featuring a harmonious mix of bold, unexpected ingredients crowned by a perfectly fried egg. This dish is a delightful fusion of savory flavors that surprises and satisfies.',
			price: 4,
			imageSrc: fusion,
		},
	];

	dishesItems.forEach((item) => {
		const titleElement = document.createElement('h3');
		titleElement.textContent = item.name;

		const descriptionElement = document.createElement('p');
		descriptionElement.textContent = item.description;

		const priceElement = document.createElement('span');
		priceElement.textContent = '$' + item.price;

		const imgItem = document.createElement('img');
		imgItem.src = item.imageSrc;
		imgItem.alt = item.name;

		const dishCard = document.createElement('article');
		dishCard.classList.add('item_container');
		dishCard.append(titleElement, descriptionElement, priceElement, imgItem);

		dishesList.append(dishCard);
	});

	dishesSection.append(dishesHeading, dishesList);
	return dishesSection;
};
