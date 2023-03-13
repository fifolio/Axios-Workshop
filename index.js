// Import Axios
const axios = require("axios");

// ----------------[Configuration Defaults]-----------------
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
axios
  .get("posts")
  .then((res) => {
    console.log(res.data[0].title);
  })
  .catch((err) => {
    console.log(err);
  });

// ----------------[Creating an instance]-----------------

// const posts = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts",
// });
// posts
//   .post("", {
//     data: {
//       title: "MY New post title",
//       body: "body is my home",
//     },
//   })
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => console.log(err));

// const todo = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
// });

// todo
//   .get("/posts")
//   .then((res) => {
//     console.log(res.data[1].title);
//   })
//   .catch((err) => console.log(`This is you get Err: ${err}`));

// ----------------[use Async/await]-----------------
const getPosts = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data[2]);
  } catch (error) {
    console.log(error);
  }
};

// getPosts();
// ----------------[ALIASES (POST)]-----------------
axios.post("https://jsonplaceholder.typicode.com/posts", {
  title: "my new blog",
  body: "this is so good post",
});
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));

// ----------------[ALIASES (GET)]-----------------
axios.get("https://jsonplaceholder.typicode.com/posts", {
  params: {
    id: 6,
  },
});
// .then((res) => {
//   console.log(res.data);
// })
// .catch((err) => console.log(err));

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
});
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));

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
