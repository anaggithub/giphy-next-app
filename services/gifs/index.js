const GIFS_LIMIT = 20;
const API_URLS = {
  TRENDING: `https://api.giphy.com/v1/gifs/trending?&limit=${GIFS_LIMIT}`,
  SEARCH: `https://api.giphy.com/v1/gifs/search?&limit=${GIFS_LIMIT}`,
};

export const getTendenciesGifs = async () => {
  const res = await fetch(
    `${API_URLS.TRENDING}&api_key=${process.env.API_KEY}`
  );
  const json = await res.json();
  return json;
};

export const getGifs = async (searchValue) => {
  const res = await fetch(
    `${API_URLS.SEARCH}&api_key=${process.env.API_KEY}&q=${searchValue}`
  );
  const json = await res.json();
  return json;
};
