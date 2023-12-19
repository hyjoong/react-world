import { postFavorite } from '@/api/favorite';
import { useMutation } from '@tanstack/react-query';

export const usePostFavoriteMutation = (options?: {}) => {
  const mutation = useMutation({
    mutationKey: ['postFavorite'],
    mutationFn: postFavorite,
    ...options,
  });

  return mutation;
};
