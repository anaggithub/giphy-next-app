const API_URLS = {
  TRENDING: "https://api.giphy.com/v1/gifs/trending?&limit=2",
};

const getTendenciesGifs = async () => {
  const res = await fetch(
    `${API_URLS.TRENDING}&api_key=${process.env.API_KEY}`
  );
  const json = await res.json();
  return json;
};

export default getTendenciesGifs;
