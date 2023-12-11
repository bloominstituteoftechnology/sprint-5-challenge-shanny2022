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

  function generateLearnerCard(learner) {
    return `
      <div class="card">
        <h2>${learner.fullName}</h2>
        <p>Email: ${learner.email}</p>
        <p>Mentors: ${learner.mentors.join(', ')}</p>
      </div>
    `;
  }


  function renderLearners(data) {
    const container = document.querySelector('.cards'); // or whatever the selector for your container is

    if (!container) {
      console.error('Container element not found');
      return;
    }

    data.learners.forEach(learner => {
      const card = generateLearnerCard(learner);
      container.insertAdjacentHTML('beforeend', card);
    });
 // Add event listeners to the cards
 const cards = container.querySelectorAll('.card');
 cards.forEach(card => {
   card.addEventListener('click', event => {
     // Handle click event here
     // For example, toggle a class
     event.currentTarget.classList.toggle('active');

     // Or change the text content of an element
     const h2 = event.currentTarget.querySelector('h2');
     if (h2) {
       h2.textContent = 'Clicked!';
     }
   });
   });
   }

   const element = screen.queryByText("No learner is selected");
if (element) {
  // Element found, perform your assertions or actions here
} else {
  // Element not found, handle the case accordingly
}
console.log(ulElement); // Log the value of the ulElement variable
expect(ulElement).not.toBeVisible();

console.log(cardElement.classList); // Log the classList of the cardElement
expect(cardElement.classList.contains('selected')).toBe(true);

console.log(infoElement.style.visibility); // Log the visibility of the infoElement
expect(infoElement).toBeVisible();

console.log(infoElement.style.visibility); // Log the visibility of the infoElement
expect(infoElement).toBeVisible();

console.log(card1.classList.contains('selected')); // Log the value of the "selected" class for card1
console.log(card2.classList.contains('selected')); // Log the value of the "selected" class for card2
expect(card1.classList.contains('selected')).toBe(true);

      // Select the footer element
const footer = document.querySelector('footer');

// Set the text content of the footer
footer.textContent = "© BLOOM INSTITUTE OF TECHNOLOGY 2023";
  // 👆 WORK WORK ABOVE THIS LINE 👆
}



// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
