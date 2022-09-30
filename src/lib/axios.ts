import axios from 'axios';

export const apiGit = axios.create({
  baseURL: "http://api.github.com/",
});

