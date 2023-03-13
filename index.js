// Import Axios
const axios = require("axios");

// ----------------[Interceptors]-----------------

// Do something BEFORE request is sent
axios.interceptors.request.use(
  (res) => {
    console.log("Hello and Welcome, This is below is you data");
    return res;
  },
  (err) => {
    console.log(`This is interceptor cached your err: ${err}`);
  }
);

// Do something WITH response data
axios.interceptors.response.use(
  (res) => {
    console.log(res.data[2]);
  },
  (err) => {
    console.log(`Interceptor err: ${err}`);
  }
);

// Do something AFTER request is sent
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(() => {
    console.log("End Fetching");
  })
  .catch((err) => {
    console.log(err);
  });

// ----------------[Multiple Requests & Spread]-----------------
// const user = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
// });
// const posts = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
// });
// axios.all([user.get("/users"), posts.get("/posts")]).then(
//   axios.spread((usersRes, postsRes) => {
//     console.log(usersRes.data[0]);
//     console.log(postsRes.data[0]);
//   })
// );

// ----------------[Configuration Defaults]-----------------
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
// axios
//   .get("posts")
//   .then((res) => {
//     console.log(res.data[0].title);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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
// const getPosts = async () => {
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     console.log(res.data[2]);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getPosts();

// ----------------[ALIASES (POST)]-----------------
// axios.post("https://jsonplaceholder.typicode.com/posts", {
//   title: "my new blog",
//   body: "this is so good post",
// });
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));

// ----------------[ALIASES (GET)]-----------------
// axios.get("https://jsonplaceholder.typicode.com/posts", {
//   params: {
//     id: 6,
//   },
// });
// .then((res) => {
//   console.log(res.data);
// })
// .catch((err) => console.log(err));

// ----------------[POST]-----------------
// const userId = 1996,
//   title = "My Best Post",
//   body = "This is something I really love to do";
// // Call Axios to fetch data
// axios({
//   url: "/posts", // Slug
//   baseURL: "https://jsonplaceholder.typicode.com", // Base
//   method: "post", // Fetch Type
//   data: {
//     userId: userId,
//     title: title,
//     body: body,
//   },
// });
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));

// ----------------[GET]-----------------
// Call Axios to fetch data
// axios({
//   url: "/todos", // Slug
//   baseURL: "https://jsonplaceholder.typicode.com", // Base
//   method: "get", // Fetch Type
// });
//   .then((res) => {
//     console.log(res.data[1].title);
//     console.log(res.status);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
