"use client"
import Main from '@/components/main';
import Image from 'next/image';
import styles from './page.module.scss';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { useState } from 'react';
import { useGlobalContext } from '@/contexts/AppContext'
import Button from '@/components/ui/Button';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
	const { state } = useGlobalContext();
	const router = useRouter();
	const goToDashboard = () => {
		signOut({ callbackUrl: '/' })
		// router.push('/');
	}

	return (
		<div className={styles.container}>
			{state.user && (
				<>
					<img
						src={state.user.image}
						alt="user image"
						width={50}
						height={50}
					/>
					<h1>{state.user.name}</h1>
				</>
			)}
			<Button customStyle={{ width: "25%" }} onClick={goToDashboard}>Sign Out</Button>
		</div>
	);
}
