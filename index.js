// javascript code
const menuButton = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const close = document.createElement('li');
close.className = 'close';
const closeIcon = document.createElement('img');
closeIcon.className = 'close-icon';
closeIcon.src = './img/Iconclose-icon.png';
close.append(closeIcon);
const menuItem = document.querySelectorAll('.menu-item');

menuButton.addEventListener('click', () => {
  menu.classList.add('menu-mobile');
  menu.append(close);
});

close.addEventListener('click', () => {
  menu.classList.remove('menu-mobile');
  closeIcon.remove();
});

menuItem.forEach((element) => {
  element.addEventListener('click', () => {
    menu.classList.remove('menu-mobile');
  });
});

// Card details in array
const featureCard = [
  {
    id_card: '0',
    title: 'Tesla Car Booking',
    work_section_img: './img/taslaCarsPc.png',
    fullProjectPhoto: './img/taslaCarsPc.png',
    card_title: 'Tesla Car Booking',
    card_description:
      'Experience streamlined car management and reservations with our React and Rails web app, allowing admins to effortlessly handle inventory while users reserve cars by model, city, and time.',
    long_description:
      'Experience streamlined car management and reservations with our React and Rails web app, allowing admins to effortlessly handle inventory while users reserve cars by model, city, and time.',
    tech: ['HTML', 'Bootstrap', 'Ruby on rails'],
    livelink: 'https://tesla-car-booking-front.onrender.com/',
    sourcelink: 'https://github.com/Alibaba2023/Tesla-car-booking-back-end',
  },
  {
    id_card: '1',
    title: 'feature-card--1',
    fullProjectPhoto: './img/spaceXPC.png',
    card_title: 'Space Travelers',
    card_description:
      'In this task, we will be working with the real live data from the SpaceX API. Our task is to build a web application for a company that provides commercial and scientific space travel services. User can book the rockets.',
    long_description:
      'In this task, we will be working with the real live data from the SpaceX API. Our task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    tech: ['HTML', 'Bootstrap', 'React'],
    livelink: 'https://spacextravels.netlify.app/',
    sourcelink: 'https://github.com/Alibaba2023/space-travelers',
  },
  {
    id_card: '2',
    title: 'feature-card--2',
    fullProjectPhoto: './img/weatherPC.png',
    card_title: 'World Weather App',
    card_description:
      'World Weather App is a user-friendly web application with two pages. On the first page, users can select their desired country, and on the second page, they will be presented with real-time weather conditions for the selected location.',
    long_description:
      'World Weather App is a user-friendly web application with two pages. On the first page, users can select their desired country, and on the second page, they will be presented with real-time weather conditions for the selected location. With a focus on accuracy and simplicity, it aims to provide a seamless experience for users seeking weather.',
    tech: ['HTML', 'Bootstrap', 'React'],
    livelink: 'https://world-weather-app.onrender.com/',
    sourcelink: 'https://github.com/Alibaba2023/world-weather-app',
  },
  {
    id_card: '3',
    title: 'feature-card--3',
    fullProjectPhoto: './img/hardwarepioneers.png',
    card_title: 'Hardware Pioneers',
    card_description:
      'My HTML, CSS, and JavaScript-built project aims to raise technology awareness within the company through an interactive website.it is from a real event that occurs every year in a different country.',
    long_description:
      'My HTML, CSS, and JavaScript-built project aims to raise technology awareness within the company through an interactive website.it is from a real event that occurs every year in a different country.',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: 'https://alibaba2023.github.io/Hardware_Pioneers/',
    sourcelink: 'https://github.com/Alibaba2023/Hardware_Pioneers',
  },
  {
    id_card: '4',
    title: 'feature-card--4',
    fullProjectPhoto: './img/book store.png',
    card_title: 'Book Store ',
    card_description:
      'BookStore is an innovative web project designed to simplify book management for avid readers and book enthusiasts. This API-powered platform allows users to effortlessly add, organize, and remove books from their virtual bookshelves.',
    long_description:
      'BookStore is an innovative web project designed to simplify book management for avid readers and book enthusiasts. This API-powered platform allows users to effortlessly add, organize, and remove books from their virtual bookshelves.',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: 'https://book-store-oti6.onrender.com/',
    sourcelink: 'https://github.com/Alibaba2023/book-store',
  },
  {
    id_card: '5',
    title: 'feature-card--5',
    fullProjectPhoto: './img/awesomebookpc.png',
    card_title: 'Awesome Book Store',
    card_description:
      'Awesome-book project enables effortless book addition and removal, providing a simple way to stay organized. Responsive and nice user interface best for storing books and a great use of colors in this project.',
    long_description:
      'Awesome-book project enables effortless book addition and removal, providing a simple way to stay organized. Responsive and nice user interface best for storing books.',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: 'https://alibaba2023.github.io/Awesome-Book/',
    sourcelink: 'https://alibaba2023.github.io/Awesome-Book/',
  },
  {
    id_card: '6',
    title: 'feature-card--6',
    fullProjectPhoto: './img/mathpc.png',
    card_title: 'Math Magicians',
    card_description:
      'A calculator and can provide the calculated operation. Has been the industrys standard.Responsive and nice user interface best for math operations. With a ramdom quote that fetches from the API.',
    long_description:
      'A calculator and can provide the calculated operation. Has been the industrys standard.Responsive and nice user interface best for math operations. With a ramdom quote that fetches from the API.',
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: 'https://math-magicians-hffp.onrender.com/',
    sourcelink: 'https://github.com/Alibaba2023/math-magicians',
  },
];

const featureCardMultiPost = (data, i) => `
<div class='work-header'>
  <div class-'work-header'>
    <div class='work-heading-box flex'>
      <h2 class='recent-work-heading'>My Recent Works</h2>
      <span class='border-line-bottom'></span>
    </div>
    <div class='multi-post'>
      <div class='recent-work-img-box'>
        <img
          class='work-img'
          src='${data.work_section_img}'
          alt='A girl during yuga'
        />
      </div>
      <div class='recent-work-text-box'>
        <h3 class='heading-tertiary'>${data.card_title}</h3>
        <p class='work-description description-text'>
          ${data.card_description}
        </p>
        <ul class='languages-list flex'>
    ${data.tech
    .map(
      (detail) => `<li><a class='language' href='#'><p class='language-feature drak-color'>${detail}</p></a></li>`,
    )
    .join('')}
        </ul>
        <a href='${data.livelink}' content-id='${i}' class='btn-popup btn btn-inline-block recent-btn'>
          <p>See project</p>
        </a>
      </div>
    </div>
  </div>
</div>

`;

const featureCardFirst = (data, i) => `
  <div class="features flex">
  <div id="feature--${i}">
    <div class="first--card feature-card">
    <h3 class="heading-tertiary heading-feature">
    ${data.card_title}
    </h3>
    <p class="feature-description description-text">
    ${data.card_description}
    </p>
    <ul class="languages-list flex">
    ${data.tech
    .map(
      (detail) => `<li><a class="language" href="#"><p class="language-feature">${detail}</p></a></li>`,
    ).join()
}
    </ul>
    </div>
    <a href="${data.livelink}"
    content-id="${i}" class="btn-popup feature-btn btn ">
    <p>See project</p>
    </a>
    </div>
    </div>
`;

const popupWindow = (data) => `
    <div class="header-container flex padding-bottom">
    <h2 class="recent-work-heading">${data.card_title}</h2>
    <img src="./img/Iconclose-icon.png" class="close-btn-popup" alt="close-btn">
    </div>
    <ul class="languages-list flex padding-bottom">
    ${data.tech
    .map(
      (detail) => `<li><a class="language" href="#"><p class="drak-color">${detail}</p></a></li>`,
    )
    .join('')}
    </ul>
    <div class="multi-post">
    <div class="recent-work-img-box padding-bottom">
    <img
    class="work-img"
    src="${data.fullProjectPhoto}"
    alt="A girl during yuga"
    />
    </div>
    <div class="recent-work-text-box">
    <p class="work-description description-text padding-bottom">
    ${data.long_description}
    </p>
    <ul class="btns-popup flex">
    <li>
    <a class="centering" href="${data.livelink}" target="_blank">
    <p class="btn centering padding-2px">See live
    <svg class="hero-icons " width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="white"/>
      </svg>
      </p>
      </a>
    </li>
    <li>
    <a class="centering" href="${data.sourcelink}" target="_blank">
    <p class="btn">See source
      <svg
      class="hero-icons"
      width="18"
      height="20"
      fill="none" 
      viewBox="0 0 18 20"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z"
      fill="white"/>
      </svg>
      </p>
      </a>
    </li>
    </ul>
    </div>
    </div>`;

const genralWorkContainer = document.querySelector('.work-container');
featureCard.forEach((data, i) => {
  if (i === 0) {
    genralWorkContainer.innerHTML += featureCardMultiPost(data, i);
  } else {
    genralWorkContainer.innerHTML += featureCardFirst(data, i);
  }
});

const btnSeeProject = document.querySelectorAll('.btn-popup');
const popupWindowContainer = document.querySelector('.Popup-window-container');
const blurBack = document.querySelector('.background-back');

btnSeeProject.forEach((element, index) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    const cardId = index;
    popupWindowContainer.innerHTML = popupWindow(featureCard[cardId]);
    popupWindowContainer.classList.add('open-modal');
    blurBack.classList.add('blur');

    const closeBtn = document.querySelector('.close-btn-popup');
    closeBtn.addEventListener('click', () => {
      popupWindowContainer.classList.remove('open-modal');
      popupWindowContainer.innerHTML = '';
      blurBack.classList.remove('blur');
    });
  });
});

const submitForm = document.querySelector('.contact-form');
const errorText = document.querySelector('.error-text');

submitForm.addEventListener('submit', (e) => {
  const emailInput = document.querySelector('.email-form').value;

  if (emailInput.toLowerCase() !== emailInput) {
    e.preventDefault();
    errorText.classList.remove('.display-none');
    errorText.style.display = 'block';
  } else {
    errorText.style.display = 'none';
  }
});

// Data Preservation in Browser
