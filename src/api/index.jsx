import axios from "axios";

const apiEndpoint = "https://blogbackend.vercel.app/";

// export const fetchPosts = async () => await axios.get(`${apiEndpoint}posts`);

export const fetchSinglePost = async (id) =>
  await axios.get(`${apiEndpoint}${id}`);

export const createPost = async (post) => await axios.post(apiEndpoint, post);

export const updatePost = async (id, updatedPost) =>
  await axios.patch(`${apiEndpoint}${id}`, updatedPost);

export const deletePost = async (id) =>
  await axios.delete(`${apiEndpoint}${id}`);
