import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { LeadCaptureFormData } from '../backend';

export function useSubmitLead() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: LeadCaptureFormData) => {
      if (!actor) throw new Error('Actor not available');
      return await actor.submitLead(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    }
  });
}
