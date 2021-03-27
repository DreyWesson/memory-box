import axios from "./axios";

// This is important for our routes auth.middleware to work
axios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// Posts APIs
const fetchPosts = () => axios.get("/api/v1/posts/"),
  getPost = (id) => axios.get(`/api/v1/posts/${id}/`),
  createPost = (newPost) => axios.post("/api/v1/posts/", newPost),
  updatePost = (id, updatedData) =>
    axios.patch(`/api/v1/posts/${id}/`, updatedData),
  deletePost = (id) => axios.delete(`/api/v1/posts/${id}/`),
  likePost = (id) => axios.patch(`/api/v1/posts/${id}/likePost/`);

// Auth APIs
const signin = (formData) => axios.post("/api/v1/users/signin/", formData),
  signup = (formData) => axios.post("/api/v1/users/signup/", formData),
  forgotpassword = (formData) =>
    axios.post("/api/v1/users/forgotpassword/", formData),
  resetpassword = (formData, match) =>
    axios.put(
      `/api/v1/users/resetpassword/${match.params.resetToken}/`,
      formData
    );

export {
  fetchPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  signin,
  signup,
  forgotpassword,
  resetpassword,
};
