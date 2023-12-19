import { deleteFavorite } from '@/api/favorite';
import { useMutation } from '@tanstack/react-query';

export const useDeleteFavoriteMutation = (options?: {}) => {
  const mutation = useMutation({
    mutationKey: ['deleteFavorite'],
    mutationFn: deleteFavorite,
    ...options,
  });

  return mutation;
};
