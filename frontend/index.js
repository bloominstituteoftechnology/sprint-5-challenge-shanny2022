/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  await fetchData(); // Reuse existing fetchData method
  // Render learners on DOM
  // Render mentors on DOM
  // Render mentors for each learner on DOM
  const cards = document.querySelector('.cards');
  const header = document.querySelector('header');
    const selectedLearner = document.createElement('h3');
    selectedLearner.textContent = "No learner is selected";
    header.appendChild(selectedLearner);
    async function fetchData() {
      try {
        const learnersResponse = await axios.get('http://localhost:3003/api/learners');
        const mentorsResponse = await axios.get('http://localhost:3003/api/mentors');
        const learnersData = learnersResponse.data;
        const mentorsData = mentorsResponse.data;

        const combinedData = {
          learners: learnersData,
          mentors: mentorsData,
        };

        const cards = document.querySelector('.cards'); // Move this line here

        renderLearners(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    function renderLearners(data) {
      const container = document.querySelector('.cards');

      data.learners.forEach(learner => {
        const card = document.createElement('div');
        card.className = 'card';

        const name = document.createElement('h3');
        name.textContent = learner.fullName;
        card.appendChild(name);

        const email = document.createElement('p');
        email.textContent = learner.email;
        card.appendChild(email);

        const mentorsList = document.createElement('ul');
mentorsList.style.display = 'none'; // Hide the mentors list initially

learner.mentors.forEach(mentorId => {
  const mentor = data.mentors.find(m => m.id === mentorId);
  const mentorItem = document.createElement('li');
  mentorItem.textContent = `${mentor.firstName} ${mentor.lastName}`;
  mentorsList.appendChild(mentorItem);
});

card.appendChild(mentorsList);

const arrow = document.createElement('div');
arrow.className = 'mentors-arrow';
arrow.textContent = 'Mentors';
card.appendChild(arrow);


arrow.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the event from bubbling up to the card

  if (mentorsList.style.display === 'none') {
    mentorsList.style.display = 'block';
    mentorsList.classList.remove('closed'); // Remove the 'closed' class when the list is displayed
  } else {
    mentorsList.style.display = 'none';
    mentorsList.classList.add('closed'); // Add the 'closed' class when the list is not displayed
  }
});

let mentorsDisplayed = false; // Track whether the mentors are displayed

card.addEventListener('click', () => {
  document.querySelectorAll('.card.selected').forEach(selectedCard => {
    selectedCard.classList.remove('selected');
    selectedCard.querySelector('ul').style.display = 'none';
    selectedCard.querySelector('ul').classList.add('closed'); // Add the 'closed' class when the list is not displayed
  });
// Assuming mentorsTitle is the h4 element
let mentorsTitle = document.querySelector('h4');

if (!mentorsDisplayed) {
  mentorsList.style.display = 'block'; // Show the mentors list
  mentorsTitle.classList.remove('closed'); // Remove the 'closed' class from the h4
  mentorsTitle.classList.add('open'); // Add the 'open' class to the h4
  selectedLearner.textContent = `The selected learner is ${learner.fullName}`;
  card.classList.add('selected');
  mentorsDisplayed = true;
} else {
  mentorsList.style.display = 'none'; // Hide the mentors list
  mentorsTitle.classList.remove('open'); // Remove the 'open' class from the h4
  mentorsTitle.classList.add('closed'); // Add the 'closed' class to the h4
  selectedLearner.textContent = "No learner is selected";
  card.classList.remove('selected');
  mentorsDisplayed = false;
}
});

container.appendChild(card);
});

      const arrows = document.querySelectorAll('.mentors-arrow');
      arrows.forEach(arrow => {
        arrow.addEventListener('click', (event) => {
          event.stopPropagation();
          const mentorsList = arrow.parentNode.querySelector('ul');
          mentorsList.style.display = mentorsList.style.display === 'none' ? 'block' : 'none';
        });
      });
    }

    const footer = document.querySelector('footer');
    footer.textContent = "© BLOOM INSTITUTE OF TECHNOLOGY 2023";

    fetchData();
  // 👆 WORK WORK ABOVE THIS LINE 👆
}
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
