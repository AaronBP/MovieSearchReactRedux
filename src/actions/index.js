import axios from 'axios';

const ROOT_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=dbe86e57';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export function fetchMovies(title){
  const url = `${ROOT_URL}&s=${title}`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIES,
    payload: request
  };
}
