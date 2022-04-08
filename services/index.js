const getUserName = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const json = await res.json();
  const { userName } = json;
  return userName;
};

export default getUserName;
