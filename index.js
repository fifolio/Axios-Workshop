// Import Axios
const axios = require("axios");

// ----------------[POST]-----------------
const userId = 1996,
  title = "My Best Post",
  body = "This is something I really love to do";
// Call Axios to fetch data
axios({
  url: "/posts", // Slug
  baseURL: "https://jsonplaceholder.typicode.com", // Base
  method: "post", // Fetch Type
  data: {
    userId: userId,
    title: title,
    body: body,
  },
})
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

// ----------------[GET]-----------------
// Call Axios to fetch data
axios({
  url: "/todos", // Slug
  baseURL: "https://jsonplaceholder.typicode.com", // Base
  method: "get", // Fetch Type
});
//   .then((res) => {
//     console.log(res.data[1].title);
//     console.log(res.status);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
