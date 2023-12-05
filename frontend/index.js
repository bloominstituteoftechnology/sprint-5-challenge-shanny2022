const axios = require('axios');

async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇


  // Fetch data from Endpoint A
  axios.get('http://example.com/endpointA')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data from Endpoint A:', error);
    });

  // Fetch data from Endpoint B
  // Assuming you're using a library like React

  // Learner Card component
  function LearnerCard({ learner }) {
    return React.createElement('div', null);
  }

  // Fetch data from Endpoint B
  axios.get('http://example.com/endpointB')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data from Endpoint B:', error);
    });

  // Assuming `data` is your combined data from the previous step
  function renderLearnerCards(data) {
    const container = document.getElementById('container'); // Replace with your actual container

    data.forEach(learner => {
      const card = <LearnerCard learner={learner} />;
      container.appendChild(card);
    });
  }

  renderLearnerCards(data);

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // Fetch data from both endpoints
  const requestA = axios.get('http://example.com/endpointA');
  const requestB = axios.get('http://example.com/endpointB');

  Promise.all([requestA, requestB])
    .then(responses => {
      // responses[0] contains the response from Endpoint A
      // responses[1] contains the response from Endpoint B

      // Combine the data into a single data structure
      const combinedData = {
        dataA: responses[0].data,
        dataB: responses[1].data
      };

      console.log(combinedData);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
