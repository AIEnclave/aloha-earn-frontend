import SignIn from '@/components/signin';
import SignedIn from '@/components/signedin';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  console.log(":::session:::", session);
  return (
    <div>
      {!session ? (
        <SignIn />
      ) : (
        <SignedIn session={session} />
      )}
    </div>
  );
}
