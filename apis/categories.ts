import axiosInstance from '@/utils/axiosInstance';

import { UserProfile } from '@/types/user'

export const saveUserCategories = (user: any) => {
	return {
		
	}
	// return axiosInstance.post('/api/users/login', user)
}

export const fetchSelectedCategories = () => {
	return {
		categories: [
            "OCR",
            "Real Estate",
            "Contracts",
        ]
	}
	// return axiosInstance.get('/api/users/login', user)
}