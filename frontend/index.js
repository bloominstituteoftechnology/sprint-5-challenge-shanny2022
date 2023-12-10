/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  axios.all([
    axios.get('http://localhost:3003/api/learners'),
    axios.get('http://localhost:3003/api/mentors'),
  ]).then(axios.spread((learnersResponse, mentorsResponse) => {
    const learners = learnersResponse.data;
    const mentors = mentorsResponse.data;

    learners.forEach(learner => {
      learner.mentors = learner.mentors.map(id => {
        const mentor = mentors.find(mentor => mentor.id === id);
        return mentor ? mentor.name : 'Mentor not found';
      });
    });

    console.log(learners); // This should now log the learners array with mentor names instead of IDs
  }));
  function createCard(learner) {
    // Create a new div element for the card
    const card = document.createElement('div');
    card.className = 'card';

    // Add the learner's full name to the card
    const name = document.createElement('h2');
    name.textContent = learner.fullName;
    name.className = 'learner-name'; // Set the class name as per the design
    card.appendChild(name);

    // Add the learner's email to the card
    const email = document.createElement('p');
    email.textContent = learner.email;
    email.className = 'learner-email'; // Set the class name as per the design
    card.appendChild(email);

    // Add the learner's mentors to the card
    const mentors = document.createElement('ul');
    mentors.className = 'mentor-list'; // Set the class name as per the design
    learner.mentors.forEach(mentor => {
      const mentorItem = document.createElement('li');
      mentorItem.textContent = mentor;
      mentorItem.className = 'mentor-name'; // Set the class name as per the design
      mentors.appendChild(mentorItem);
    });
    card.appendChild(mentors);

    // Add an event listener to the card
    card.addEventListener('click', () => {
      // Change the text content and class names of some elements as per the design
      name.textContent = 'Clicked!';
      name.className = 'clicked-name';
      email.className = 'clicked-email';
      mentors.className = 'clicked-mentors';
    });

    return card;
  }

  // Assuming container is a DOM element where the cards are appended
  learners.forEach(learner => {
    const card = createCard(learner);
    container.appendChild(card);
  });

  // Select the footer element
const footer = document.querySelector('footer');

// Set the text content of the footer
footer.textContent = "© BLOOM INSTITUTE OF TECHNOLOGY 2023";
  // 👆 WORK WORK ABOVE THIS LINE 👆
}



// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
