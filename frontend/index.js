/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  function main() {
  }
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

        let mentorsDisplayed = false; // Track whether the mentors are displayed

        card.addEventListener('click', () => {
          document.querySelectorAll('.card.selected').forEach(selectedCard => {
            selectedCard.classList.remove('selected');
            selectedCard.querySelector('ul').style.display = 'none';
          });

          if (!mentorsDisplayed) {
            mentorsList.style.display = 'block'; // Show the mentors list
            selectedLearner.textContent = `The selected learner is ${learner.fullName}`;
            card.classList.add('selected');
            mentorsDisplayed = true;
          } else {
            mentorsList.style.display = 'none'; // Hide the mentors list
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
