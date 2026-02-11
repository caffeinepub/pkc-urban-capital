import { forwardRef } from 'react';
import { useGetAllCommercialProjects } from '../../hooks/useCommercialProjects';
import { useAdminStatus } from '../../hooks/useAdminStatus';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../../hooks/useUserProfile';
import CommercialProjectCard from '../commercial/CommercialProjectCard';
import CommercialProjectsAdminPanel from '../admin/CommercialProjectsAdminPanel';
import ProfileSetupModal from '../auth/ProfileSetupModal';
import { COPY } from '../../content/copy';
import { Skeleton } from '../ui/skeleton';

const FeaturedPropertiesSection = forwardRef<HTMLElement>((_, ref) => {
  const { data: projects = [], isLoading: projectsLoading } = useGetAllCommercialProjects();
  const { identity } = useInternetIdentity();
  const { isAdmin, isLoading: adminLoading } = useAdminStatus();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();

  const isAuthenticated = !!identity;
  const showAdminPanel = isAuthenticated && isAdmin && !adminLoading;
  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground">
            {COPY.properties.title}
          </h2>
          <p className="text-lg md:text-xl text-primary font-medium">
            {COPY.properties.subtitle}
          </p>
        </div>

        {showAdminPanel && (
          <div className="mb-12 max-w-5xl mx-auto">
            <CommercialProjectsAdminPanel projects={projects} />
          </div>
        )}

        {projectsLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4 p-6 border border-border rounded-lg">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {projects.map((project) => (
              <CommercialProjectCard key={project.id.toString()} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              {COPY.properties.emptyState}
            </p>
            {showAdminPanel && (
              <p className="text-sm text-muted-foreground">
                {COPY.properties.emptyStateAdmin}
              </p>
            )}
          </div>
        )}
      </div>

      <ProfileSetupModal open={showProfileSetup} />
    </section>
  );
});

FeaturedPropertiesSection.displayName = 'FeaturedPropertiesSection';

export default FeaturedPropertiesSection;
