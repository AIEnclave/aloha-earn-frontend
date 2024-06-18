import axiosInstance from '@/utils/axiosInstance';

export const saveEvaluations = (evaluation: any) => {
    console.log("SAVING EVALUATION", evaluation)
	return axiosInstance.post('/evaluations', evaluation).then((data) => data.data)
}