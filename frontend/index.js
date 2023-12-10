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
  }))

      async function fetchData() {
        // Fetch data from both endpoints concurrently
        const [learnersResponse, mentorsResponse] = await Promise.all([
          axios.get('http://localhost:3003/api/learners'),
          axios.get('http://localhost:3003/api/mentors'),
        ]);

        // Extract the data from the responses
        const [learners, mentors] = await Promise.all([
          // Call fetchData function
          fetchData(),
          // Call fetchData function
          fetchData()
        ]);

        // Replace mentor IDs in learners' data with actual mentor names
        learners.forEach(learner => {
          learner.mentors = learner.mentors.map(mentorId => {
            const mentor = mentors.find(mentor => mentor.id === mentorId);
            return mentor ? mentor.name : 'Unknown Mentor';
          });
        }
        );
          // Return the combined data
        return learners;
      }
      // Select the container element where cards will be rendered
      const container = document.getElementById('container');
      // Fetch learner data and call createCard for each learner
      const learners = await fetchData();
      learners.forEach(learner => {
        const card = createCard(learner);
        container.appendChild(card);
      });
      // Create a new Learner Card element
      function createCard(learner) {
        // Create a new div element for the card
        const card = document.createElement('div');
        card.className = 'card';

        // Create a new h3 element for the learner's name
        const name = document.createElement('h3');
        name.textContent = learner.name;
        card.appendChild(name);

        // Create a new ul element for the list of mentors
        const mentorsList = document.createElement('ul');
        learner.mentors.forEach(mentor => {
          const mentorItem = document.createElement('li');
          mentorItem.textContent = mentor;
          mentorsList.appendChild(mentorItem);
        });
        card.appendChild(mentorsList);

        // Return the Learner Card element
        return card;
      }
      async function renderCards() {
        // Fetch the combined data
        const learners = await fetchData();

        // Select the container where the cards will be appended
        const container = document.querySelector('.cards');

        // Loop over the data
        learners.forEach(learner => {
          // Generate a Learner Card for each learner
          const card = createCard(learner);

          // Add a click event listener to the card
          card.addEventListener('click', (event) => {
            // If the clicked element is the h3 (name), toggle the 'highlight' class
            if (event.target.tagName === 'H3') {
              card.classList.toggle('highlight');
            }

            // If the clicked element is the ul (mentors list), toggle the 'collapsed' class
            if (event.target.tagName === 'UL') {
              event.target.classList.toggle('collapsed');
            }
          });

          // Append the card to the DOM
          container.appendChild(card);
        });
      }

      // Call the renderCards function
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
