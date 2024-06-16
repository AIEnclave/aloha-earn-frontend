import axiosInstance from '@/utils/axiosInstance';

import { UserProfile } from '@/types/user'

export const createUser = (user: any) => axiosInstance.post('/api/users', user)

export const fetchUser = async (id: number): Promise<UserProfile> => {
	const response = await axiosInstance.get<UserProfile>(`/api/users/${id}`);
	return response.data;
}