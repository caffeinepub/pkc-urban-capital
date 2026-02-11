import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { CommercialProject } from '../backend';

export function useGetAllCommercialProjects() {
  const { actor, isFetching } = useActor();

  return useQuery<CommercialProject[]>({
    queryKey: ['commercialProjects'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCommercialProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetCommercialProject(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<CommercialProject | null>({
    queryKey: ['commercialProject', id.toString()],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getCommercialProject(id);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateCommercialProject() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (project: Omit<CommercialProject, 'id' | 'lastUpdated'>) => {
      if (!actor) throw new Error('Actor not available');
      const projectWithDefaults: CommercialProject = {
        ...project,
        id: BigInt(0),
        lastUpdated: BigInt(0),
      };
      return await actor.createCommercialProject(projectWithDefaults);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['commercialProjects'] });
    },
  });
}

export function useUpdateCommercialProject() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, project }: { id: bigint; project: Omit<CommercialProject, 'id' | 'lastUpdated'> }) => {
      if (!actor) throw new Error('Actor not available');
      const updatedProject: CommercialProject = {
        ...project,
        id,
        lastUpdated: BigInt(0),
      };
      return await actor.updateCommercialProject(id, updatedProject);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['commercialProjects'] });
    },
  });
}

export function useDeleteCommercialProject() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error('Actor not available');
      return await actor.deleteCommercialProject(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['commercialProjects'] });
    },
  });
}
