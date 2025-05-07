import { renderContactTab } from './renderContactTab';
import { renderHomeTab } from './renderHomeTab';
import { renderMenuTab } from './renderMenuTab';
import './styles.css';

const navTabs = document.querySelector('nav');
const content = document.querySelector('#content');

// initial content
renderHomeTab();

const tabFunctions = {
	home: renderHomeTab,
	menu: renderMenuTab,
	contact: renderContactTab,
};

navTabs.addEventListener('click', (e) => {
	if (!e.target.matches('button')) return;

	const activeTab = e.target.dataset.tab;

	navTabs
		.querySelectorAll('button')
		.forEach((btn) => btn.classList.remove('active'));
	e.target.classList.add('active');

	content.textContent = '';
	tabFunctions[activeTab]?.();
});
