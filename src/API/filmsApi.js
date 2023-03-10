import axios from 'axios';
const keyApi = 'b501d5de5d137bb5d7d9e646e8498b17';

async function onFetch() {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${keyApi}`
  );
  return resp.data.results;
}
async function onFetchSearch(search) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${search}`
  );

  if (resp.status !== 200 || resp.data.total_results === 0) {
    throw new Error();
  } else return resp.data.results;
}
async function onFetchFilm(id) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${keyApi}`
  );
  return resp.data;
}

async function onFetchCast(id) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${keyApi}`
  );
  return resp.data.cast;
}

async function onFetchReviews(id) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${keyApi}`
  );
  return resp.data.results;
}

export { onFetch, onFetchFilm, onFetchCast, onFetchReviews, onFetchSearch };
