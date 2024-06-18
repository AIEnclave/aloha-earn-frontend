import { saveEvaluations } from "@/apis/evaluation";
import { useQuery, useMutation, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import { UserProfile, UserProfileResponse } from "@/types/user"
const KEY = "evaluation"
export const useMutateEvaluation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (evaluation) => saveEvaluations(evaluation),
    onMutate: async (evaluation) => {
      await queryClient.cancelQueries({ queryKey: [KEY] });

      const previousUserInfo = queryClient.getQueryData<UserProfileResponse[]>([KEY]);
      
      queryClient.setQueryData<UserProfileResponse[]>([KEY], old => {
        return [{ ...evaluation, id: Date.now() }, ...(old || [])];
      });

      return { previousUserInfo };
    },
    onError: (err, evaluation, context) => {
        console.log("err:", err)
      if (context?.previousUserInfo) {
        queryClient.setQueryData([KEY], context.previousUserInfo);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [KEY] });
    },
    onSuccess: (data: UserProfileResponse, variables, context) => {
      // `data` is the response from the API
      console.log("data:::222222", data)
      queryClient.setQueryData<UserProfileResponse[]>([KEY], old => {
        return [data, ...(old || [])];
      });
    },
  });
};
