import NextAuth, { type NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google"
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user })
    {
      if (session.user)
      {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "879425305474-cu1m5f2p73ikmmt7i6bqvtv7i1nt5i03.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
