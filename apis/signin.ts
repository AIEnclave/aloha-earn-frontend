import axiosInstance from '@/utils/axiosInstance';

import { UserProfile } from '@/types/user'

export const signInUser = (user: any) => {
	return {
		"name": "Ashwani",
		"userName": "ashwin4",
		"profileImageUrl": "url",
		"twitterProvider": {
			"token": "asds23ds3eqwdd2d222ed3d32d23.d32d3d3d32d32.d2332d123xsfdg",
			"provider": "twitter"
		},
		"alohaToken": "asds23ds3eqwdd2d222ed3d32d23.d32d3d3d32d32.d2332d123xsfdg",
		"createdAt": 1718649545661
	}
	// return axiosInstance.post('/api/users/login', user)
}


export const fetchUser = async (id: number): Promise<UserProfile> => {
	return {
		"name": "Ashwani",
		"userName": "ashwin4",
		"profileImageUrl": "url",
		"twitterProvider": {
			"token": "asds23ds3eqwdd2d222ed3d32d23.d32d3d3d32d32.d2332d123xsfdg",
			"provider": "twitter"
		},
		"alohaToken": "asds23ds3eqwdd2d222ed3d32d23.d32d3d3d32d32.d2332d123xsfdg",
		"createdAt": 1718649545661
	}
	// const response = await axiosInstance.get<UserProfile>(`/api/users/${id}`);
	// return response.data;
}