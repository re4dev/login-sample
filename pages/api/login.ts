import { NextApiRequest, NextApiResponse } from "next";

interface User {
  userName: string;
  userPassword: string;
  token: string;
  userId: string;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { userName, userPassword } = req.body;

  const users: User[] = [
    {
      userName: "sampleuser",
      userPassword: "password1",
      token: "this-could-be-a-real-bearer-token",
      userId: "1",
    },
    {
      userName: "sampleuser2",
      userPassword: "password2",
      token: "this-could-be-a-real-bearer-token-2",
      userId: "2",
    },
  ];

  const user = users.find(
    (user) => user.userName === userName && user.userPassword === userPassword
  );

  if (user) {
    res.status(200).json({
      token: user.token,
      userId: user.userId,
    });
  } else {
    res.status(204).json({
      error: "wrong username or password"
    });
  }
}