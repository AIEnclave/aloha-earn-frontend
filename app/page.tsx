'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <>
          <h1>Not signed in</h1>
          <button onClick={() => signIn('twitter')}>Sign in with Twitter</button>
        </>
      ) : (
        <>
        {console.log("session::", session)}
          <h1>Signed in as {session.user?.name}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
