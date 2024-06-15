'use client';

import styles from './page.module.scss';

import Button from '@/components/ui/Button'

import { signIn, signOut, useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();
  console.log(":::styles:::", styles)
  return (
    <div>
      {!session ? (
        <div className={styles.flexCenterCol}>
          <h1>Not signed in</h1>
          <Button onClick={() => signIn('twitter')}>Sign in with Twitter</Button>
        </div>
      ) : (
        <div className={styles.flexCenterCol}>
          {console.log("session::", session)}
          <h1>Signed in as {session.user?.name}</h1>
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      )}
    </div>
  );
}
