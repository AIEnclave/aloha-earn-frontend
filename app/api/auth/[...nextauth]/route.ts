import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';

const handler = NextAuth({
	providers: [
		TwitterProvider({
			clientId: process.env.TWITTER_CLIENT_ID!,
			clientSecret: process.env.TWITTER_CLIENT_SECRET!,
			version: '2.0',
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async session({ session, token }: { session: string, token: string }) {
			session.token = token;
			return session;
		},
		async signIn({ user, account, profile, email, credentials }: {user: string, account: any, profile: any, email: string, credentials: any}) {
			// api call to save information
			return true
		},
	},
});

export { handler as GET, handler as POST };
