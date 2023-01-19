import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials, req) {
        const { userName, userPassword } = credentials as {
          userName: string;
          userPassword: string;
        };
        // Add logic here to look up the user from the credentials supplied

        if (userName !== "test" || userPassword !== "test") {
          throw new Error("Wrong data")
        }

        return { id: "1", name: "Tester", email: "tester@test.de", userId: "1"};
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};

export default NextAuth(options);
