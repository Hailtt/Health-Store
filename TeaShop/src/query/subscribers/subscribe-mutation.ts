import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '@/utils/api-endpoints';
import request from '@utils/request';

const mutationSubscribe = async (body: string) => {
  try {
    request.request({
      method: 'POST',
      url: API_ENDPOINTS.SUBSCRIBE,
      data: {
        email: body,
      },
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const useSubscribeMutation = () =>
  useMutation([API_ENDPOINTS.SUBSCRIBE], mutationSubscribe, {
    retry: 1,
  });
