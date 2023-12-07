/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

async function fetchData() {
  const [learnersResponse, mentorsResponse] = await Promise.all([
    axios.get('http://localhost:3003/api/learners'),
    axios.get('http://localhost:3003/api/mentors'),
  ]);

  const learners = learnersResponse.data;
  const mentors = mentorsResponse.data;

  learners.forEach(learner => {
    learner.mentors = learner.mentors.map(id => mentors.find(mentor => mentor.id === id).name);
  });

  return learners;
}

function createCard(learner) {
  const card = document.createElement('div');
  card.className = 'card';

  const name = document.createElement('h2');
  name.textContent = learner.fullName;
  card.appendChild(name);

  const email = document.createElement('p');
  email.textContent = learner.email;
  card.appendChild(email);

  const mentorList = document.createElement('ul');
  learner.mentors.forEach(mentor => {
    const mentorItem = document.createElement('li');
    mentorItem.textContent = mentor;
    mentorList.appendChild(mentorItem);
  });
  card.appendChild(mentorList);

  card.addEventListener('click', (event) => {
    // Check the target and take appropriate action
  });

  return card;
}

async function renderCards() {
  const learners = await fetchData();
  const container = document.querySelector('.cards');

  learners.forEach(learner => {
    const card = createCard(learner);
    container.appendChild(card);
  });
}

renderCards();



  const footer = document.querySelector('footer');
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
