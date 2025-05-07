export const renderHomeTab = () => {
	const contentContainer = document.querySelector('#content');

	const titleElement = document.createElement('h1');
	titleElement.textContent = 'Ember & Vine';

	const descriptionCard = document.createElement('div');
	descriptionCard.classList.add('card', 'descriptionContainer');
	const descriptionText = document.createElement('p');
	descriptionText.textContent =
		'A modern fusion restaurant blending bold flavors with a rustic charm. Ember & Vine specializes in wood-fired dishes, fine wines, and an intimate atmosphere perfect for both casual gatherings and special occasions.';
	descriptionCard.appendChild(descriptionText);

	const hoursCard = document.createElement('div');
	hoursCard.classList.add('card', 'hoursContainer');

	const hoursList = document.createElement('ul');
	const hoursHeading = document.createElement('h3');
	hoursHeading.textContent = 'Hours';
	hoursList.appendChild(hoursHeading);

	const hours = [
		'Monday – Thursday: 12:00 PM – 10:00 PM',
		'Friday – Saturday: 12:00 PM – 11:30 PM',
		'Sunday: 11:00 AM – 9:00 PM',
	];

	hours.forEach((time) => {
		const listItem = document.createElement('li');
		listItem.textContent = time;
		hoursList.appendChild(listItem);
	});
	hoursCard.appendChild(hoursList);

	const locationCard = document.createElement('div');
	locationCard.classList.add('card', 'locationContainer');
	const locationHeading = document.createElement('h3');
	locationHeading.textContent = 'Location';
	locationCard.appendChild(locationHeading);
	const locationText = document.createElement('p');
	locationText.textContent = '123 Forest Drive, Forestville, Maine';
	locationCard.appendChild(locationText);

	contentContainer.append(
		titleElement,
		descriptionCard,
		hoursCard,
		locationCard,
	);
};
