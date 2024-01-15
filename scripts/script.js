const sections = document.querySelectorAll('section');
const getStartedPage = document.getElementById('get-started-cards');

document.onscroll = () => {
  const bottomViewport = window.scrollY + window.innerHeight;

  sections.forEach(section => {
    const top = section.offsetTop - 250;
    const height = section.offsetHeight;

    section.classList.toggle('animate-section', bottomViewport >= top);
  });
};

getStarted.forEach(item => {
  const div = document.createElement('div');
  div.classList.add('get-started-card');

  div.innerHTML = `
    <img src="${item.image}" alt="${item.title}" draggable="false"/>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  `;

  getStartedPage.appendChild(div);
});
