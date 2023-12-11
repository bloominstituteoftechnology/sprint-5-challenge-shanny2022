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
      name.textContent = learner.fullName; // Use the correct property name
      card.appendChild(name);

       // Add the email
       const email = document.createElement('div');
       email.textContent = learner.email;
       card.appendChild(email);
       // Add the arrow
       const arrow = document.createElement('div');
       arrow.className = 'mentors-arrow';
       arrow.textContent = 'Mentors';
       card.appendChild(arrow);
        // Add a click event listener to the card
      card.addEventListener('click', () => {
        // Show the ID beside the name when the card is clicked
        name.textContent = `${learner.fullName} (ID: ${learner.id})`;
      });

        const mentorsList = document.createElement('ul');
      mentorsList.className = 'mentors-list';
      mentorsList.style.display = 'none';
      learner.mentors.forEach(mentor => {
        const mentorItem = document.createElement('li');
        mentorItem.textContent = mentor;
        mentorsList.appendChild(mentorItem);
      }
      );
      card.appendChild(mentorsList);

      container.appendChild(card);
    });
    // Add event listeners to the arrows
    const arrows = document.querySelectorAll('.mentors-arrow');
    arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        const mentorsList = arrow.nextElementSibling;
        mentorsList.style.display = mentorsList.style.display === 'none' ? 'block' : 'none';
  });

    });
  }
  // Fetch the data and create the learner cards
  fetch('path/to/your/data.json')
  .then(response => response.json())
  .then(data => createLearnerCards(data))
  .catch(error => console.error('Error:', error));

      // Select the footer element
const footer = document.querySelector('footer');

// Set the text content of the footer
footer.textContent = "© BLOOM INSTITUTE OF TECHNOLOGY 2023";
  // 👆 WORK WORK ABOVE THIS LINE 👆
}



// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
