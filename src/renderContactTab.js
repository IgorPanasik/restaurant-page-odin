import res1 from './assets/images/res1.jpg';
import res2 from './assets/images/res2.jpg';
import res3 from './assets/images/res3.jpg';
import screen from './assets/images/screen.png';

export const renderContactTab = () => {
	const contentContainer = document.querySelector('#content');

	const heading = document.createElement('h1');
	heading.textContent = 'Contacts Us';

	const contactsSection = document.createElement('div');
	contactsSection.classList.add('contact');

	const greetingTitle = document.createElement('h2');
	greetingTitle.textContent = 'Welcome To Us!';

	const imagesContainer = document.createElement('div');
	imagesContainer.classList.add('containerImage');
	const imgOne = document.createElement('img');
	const imgTwo = document.createElement('img');
	const imgThree = document.createElement('img');

	imgOne.src = res1;
	imgTwo.src = res2;
	imgThree.src = res3;

	imagesContainer.append(imgOne, imgTwo, imgThree);

	const addressLocation = document.createElement('address');
	addressLocation.textContent = '123 Forest Drive, Forestville, Maine';

	const imageMap = document.createElement('img');
	imageMap.src = screen;

	const containerLinks = document.createElement('div');
	containerLinks.classList.add('contactLinks');

	const emailAddress = document.createElement('a');
	emailAddress.textContent = 'Message To Us | perfectlyRealEmail@notFake.com';
	emailAddress.href = 'perfectlyRealEmail@notFake.com';

	const numberPhone = document.createElement('a');
	numberPhone.textContent = 'Call Us +123456789';
	numberPhone.href = 'tel:+123456789';

	containerLinks.append(emailAddress, numberPhone);

	contactsSection.append(
		heading,
		greetingTitle,
		imagesContainer,
		imageMap,
		addressLocation,
		containerLinks,
	);
	contentContainer.appendChild(contactsSection);
};
