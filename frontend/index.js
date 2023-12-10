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
  learners.forEach(learner => {
    const card = createCard(learner);
    container.appendChild(card);
  });
}
function displayCards(learners) {
 learners.forEach(learner => {
    const card = createCard(learner);
    container.appendChild(card);
  });
}
async function init() {
}
async function highlightMentor(learnerId, mentorId) {
  const learner = learners.find(l => l.id === learnerId);
  const mentor = learner.mentors.find(m => m.id === mentorId);

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if(card.innerText.includes(learner.fullName)) {
      const mentorsList = card.querySelector('ul');
      const mentorItem = mentorsList.querySelector(`li:contains(${mentor})`);
      mentorItem.classList.add('highlight');
    }
  });
}
async function unhighlightMentor(learnerId, mentorId) {
  const learner = learners.find(l => l.id === learnerId);
  const mentor = learner.mentors.find(m => m.id === mentorId);

async function toggleMentorHighlight(learnerId, mentorId) {
  const isHighlighted = mentorId.classList.contains('highlight');

  if(isHighlighted) {
    await unhighlightMentor(learnerId, mentorId);
  } else {
    await highlightMentor(learnerId, mentorId);
  }
}
async function toggleHighlight(learnerId, mentorId) {
  const isHighlighted = await toggleMentorHighlight(learnerId, mentorId);

  const mentorItem = document.querySelector(`li:contains(${mentorId})`);
  if(isHighlighted) {
    mentorItem.classList.add('highlight');
  } else {
    mentorItem.classList.remove('highlight');
  }
}
async function fetchData() {
  const response = await axios.get('http://localhost:3003/api/data');
  return response.data;
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

  return card;
}
// Add event listener to each card
card.addEventListener('click', (event) => {
  // Check if target is a mentor item
  if(event.target.tagName === 'LI') {
    // Get learner and mentor ids
    const learnerId = learner.id;
    const mentorId = event.target.textContent;

    // Call toggle highlight function
    toggleHighlight(learnerId, mentorId);
  }
});



async function renderCards() {
  const learners = await fetchData();
  const container = document.querySelector('.cards');

  learners.forEach(learner => {
    // Create a new card for the learner
const card = createCard({ fullName: 'Bob Johnson' });

// Append the card to the container
container.appendChild(card);
  });
}

renderCards();



  // Select the footer element
const footer = document.querySelector('footer');

// Set the text content of the footer
footer.textContent = "© BLOOM INSTITUTE OF TECHNOLOGY 2023";
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
