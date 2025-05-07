import { renderDishesSection } from './renderDishesSection';
import { renderDrinksSection } from './renderDrinksSection';

export const renderMenuTab = () => {
	const content = document.querySelector('#content');

	const heading = document.createElement('h1');
	heading.textContent = 'Menu';

	const dishesSection = renderDishesSection();
	const drinksSection = renderDrinksSection();
	content.append(heading, dishesSection, drinksSection);
};
