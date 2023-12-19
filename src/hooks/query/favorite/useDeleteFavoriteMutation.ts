import { deleteFavorite } from '@/api/favorite';
import { useMutation } from '@tanstack/react-query';

export const useDeleteFavoriteMutation = (id: string) => {
  const mutation = useMutation({
    mutationKey: ['deleteFavorite'],
    mutationFn: () => deleteFavorite(id),
  });

  return mutation;
};
