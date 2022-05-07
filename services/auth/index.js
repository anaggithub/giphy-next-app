export const loggin = (userName, password) => {
  return fetch(
    `http://localhost:3000/api/auth?&name=${userName}&password=${password}`
  );
};
