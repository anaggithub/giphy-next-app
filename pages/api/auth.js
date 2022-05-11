// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { users } from "../../database";

const checkUser = (name, password) => {
  const user = users.find(
    (user) => user.userName === name && user.password === password
  );
  return Boolean(user);
};

export default function handler(req, res) {
  const {
    query: { name, password },
  } = req;

  const isUserFound = checkUser(name, password);

  if (isUserFound) {
    res.status(200).json({
      message: "User found succesfully",
      data: {
        name,
      },
    });
  } else {
    res.status(404).json("User not found");
  }
}
