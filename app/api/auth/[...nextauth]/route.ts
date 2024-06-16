// lib/auth.js

import { NextAuthOptions } from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';

export const authOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      version: '2.0',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      session.token = token;
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      // api call to save information
      return true;
    },
  },
};
