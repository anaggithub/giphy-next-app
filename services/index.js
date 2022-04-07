const URLS = {
  TRENDING: "https://api.giphy.com/v1/gifs/trending?&limit=2",
};

const getUserName = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const json = await res.json();
  const { userName } = json;
  return userName;
};

export default getUserName;
