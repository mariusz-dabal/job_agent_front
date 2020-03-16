import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'http://jobagent.dodajstrony.pl/api',
  headers: {
    Authorization: 'Bearer {token}'
  }
})