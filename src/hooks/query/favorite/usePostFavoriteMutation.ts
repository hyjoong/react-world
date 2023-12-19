import { postFavorite } from '@/api/favorite';
import { useMutation } from '@tanstack/react-query';

export const usePostFavoriteMutation = (id: string, options?: {}) => {
  const mutation = useMutation({
    mutationKey: ['postFavorite'],
    mutationFn: () => postFavorite(id),
    ...options,
  });

  return mutation;
};
