/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇


  // Fetch data from Endpoint A



  async function renderLearnerCards() {
    const [learnersResponse, mentorsResponse] = await Promise.all([
      axios.get('http://localhost:3003/api/learners'),
      axios.get('http://localhost:3003/api/mentors'),
    ]);

    const learners = learnersResponse.data;
    const mentors = mentorsResponse.data;

    learners.forEach(learner => {
      learner.mentors = learner.mentors.map(id => mentors.find(mentor => mentor.id === id).name);
    });

    const container = document.querySelector('.cards');

learners.forEach(learner => {
const card = createCard(learner);
container.appendChild(card);
});

// Return the processed data
return learners;
}

function createCard(learner) {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.border = '1px solid black';
  card.style.margin = '10px';
  card.style.padding = '10px';

  const name = document.createElement('h2');
  name.textContent = learner.name;
  name.style.color = 'blue';
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

  return card;
}
  renderLearnerCards();


  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${2023}`
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
