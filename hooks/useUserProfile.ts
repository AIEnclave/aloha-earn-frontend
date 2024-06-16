import { createUser, fetchUser } from "@/apis/userProfile";
import { useQuery, useMutation, useQueryClient, UseQueryResult } from 'react-query';

import { UserProfile } from "@/types/user"



export const useCreateUser = () => {
	const queryClient = useQueryClient()
	return useMutation((todo: any) => createUser(todo), {
		onMutate: async (newTodo: any) => {
			await queryClient.cancelQueries('userInfo');

			const prev = queryClient.getQueryData('userInfo')

			queryClient.setQueryData('userInfo', (old: any) => [{ ...newTodo, id: Date.now() }, ...old])
			return {
				prev, newTodo
			}
		},
		onError: (err: any, _: any, context: any) => {
			queryClient.setQueryData('userInfo', context.prev)
		},
		onSettled: () => {
			queryClient.invalidateQueries('userInfo')
		}
	})
}



export const useFetchUser = (userId: number): UseQueryResult<UserProfile, Error> => {
	return useQuery<UserProfile, Error>(['userInfo', userId], () => fetchUser(userId));
}
