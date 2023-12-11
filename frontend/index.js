/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  async function fetchData() {
    try {
      const learnersResponse = await axios.get('http://localhost:3003/api/learners');
      const mentorsResponse = await axios.get('http://localhost:3003/api/mentors');

      const learnersData = learnersResponse.data;
      const mentorsData = mentorsResponse.data;
      // Combine the data obtained from Endpoint A and Endpoint B into a single data structure
      const combinedData = {
        learners: learnersData,
        mentors: mentorsData,
      };
       // Call a function to render the learners and their cards
      renderLearners(combinedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();
  function renderLearners(data) {
    const container = document.querySelector('.cards');

    data.learners.forEach(learner => {
      const card = document.createElement('div');
      card.className = 'card';

      const name = document.createElement('h3');
      name.textContent = learner.fullName;
      card.appendChild(name);

      const email = document.createElement('div');
      email.textContent = learner.email;
      card.appendChild(email);

      const arrow = document.createElement('div');
      arrow.className = 'mentors-arrow';
      arrow.textContent = 'Mentors';
      card.appendChild(arrow);

      card.addEventListener('click', () => {
        if (name.textContent === learner.fullName) {
          name.textContent = `${learner.fullName} (ID: ${learner.id})`;
        } else {
          name.textContent = learner.fullName;
        }
      });

      const mentorsList = document.createElement('ul');
      mentorsList.className = 'mentors-list';
      mentorsList.style.display = 'none';
      learner.mentors.forEach(mentorId => {
        const mentor = data.mentors.find(m => m.id === mentorId);
        const mentorItem = document.createElement('li');
        mentorItem.textContent = mentor ? mentor.name : 'Mentor not found';
        mentorsList.appendChild(mentorItem);
      });
      card.appendChild(mentorsList);

      container.appendChild(card);
    });

    const arrows = document.querySelectorAll('.mentors-arrow');
    arrows.forEach(arrow => {
      arrow.addEventListener('click', (event) => {
        event.stopPropagation();
        const mentorsList = arrow.nextElementSibling;
        mentorsList.style.display = mentorsList.style.display === 'none' ? 'block' : 'none';
      });
    });
  }
  // Fetch the data and create the learner cards
  fetch('path/to/your/data.json')
  .then(response => response.json())
  .then(data => createLearnerCards(data)).catch(error => console.error('Error:', error));
  async function createLearnerCards(data) {
    // Call function to render learners and their cards
    renderLearners(data);
  }
  // Select the header element
  const header = document.querySelector('header');
  // Set the text content of the header
  header.textContent = "Welcome to the Learner Dashboard";

// Select the footer element
const footer = document.querySelector('footer');

// Set the text content of the footer
footer.textContent = "© BLOOM INSTITUTE OF TECHNOLOGY 2023";
  // 👆 WORK WORK ABOVE THIS LINE 👆
}



// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
