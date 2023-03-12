// Import Axios
const axios = require("axios");

// Call Axios to fetch data
axios({
  url: "/todos", // Slug
  baseURL: "https://jsonplaceholder.typicode.com", // Base
  method: "get", // Fetch Type
})
  .then((res) => {
    console.log(res.data[1].title);
  })
  .catch((err) => {
    console.log(err);
  });
