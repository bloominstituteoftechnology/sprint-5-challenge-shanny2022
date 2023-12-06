/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const axios = require('axios');

async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇


  // Fetch data from Endpoint A
  const response = await axios.get('http://example.com/endpoint');
  console.log(response.data);

  axios.get('http://example.com/endpoint')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {

      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

  // Fetch data from Endpoint B
  // Assuming you're using a library like React
  function MyComponent() {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
      axios.get('http://example.com/endpoint')
        .then(response => {
          setData(response.data);
        })
        .catch(err => {
          setError(err);
          console.error('Error fetching data:', err);
        });
    }, []); // Empty dependency array means this effect runs once on mount


    }

  module.exports = MyComponent;

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
    const card = document.createElement('div');
      card.className = 'card';

      const name = document.createElement('h2');
      name.textContent = learner.name;

      card.appendChild(name);

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
