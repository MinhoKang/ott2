import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'f93b9863febb2e9f7a79ca6c052e663d',
  },
});

export default instance;
