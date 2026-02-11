import { useState } from 'react';
import { useCreateCommercialProject, useUpdateCommercialProject, useDeleteCommercialProject } from '../../hooks/useCommercialProjects';
import type { CommercialProject } from '../../backend';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Plus, Edit, Trash2, X } from 'lucide-react';
import { toast } from 'sonner';

interface CommercialProjectsAdminPanelProps {
  projects: CommercialProject[];
}

interface ProjectFormData {
  title: string;
  location: string;
  carpetArea: string;
  price: string;
  highlights: string;
  contactDetails: string;
}

const emptyForm: ProjectFormData = {
  title: '',
  location: '',
  carpetArea: '',
  price: '',
  highlights: '',
  contactDetails: 'Get Best Price',
};

export default function CommercialProjectsAdminPanel({ projects }: CommercialProjectsAdminPanelProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<CommercialProject | null>(null);
  const [formData, setFormData] = useState<ProjectFormData>(emptyForm);

  const createProject = useCreateCommercialProject();
  const updateProject = useUpdateCommercialProject();
  const deleteProject = useDeleteCommercialProject();

  const handleOpenDialog = (project?: CommercialProject) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        title: project.title,
        location: project.location,
        carpetArea: project.carpetArea,
        price: project.price,
        highlights: project.highlights.join(', '),
        contactDetails: project.contactDetails,
      });
    } else {
      setEditingProject(null);
      setFormData(emptyForm);
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingProject(null);
    setFormData(emptyForm);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const highlightsArray = formData.highlights
      .split(',')
      .map(h => h.trim())
      .filter(h => h.length > 0);

    const projectData = {
      title: formData.title,
      location: formData.location,
      carpetArea: formData.carpetArea,
      price: formData.price,
      highlights: highlightsArray,
      contactDetails: formData.contactDetails,
    };

    try {
      if (editingProject) {
        await updateProject.mutateAsync({
          id: editingProject.id,
          project: projectData,
        });
        toast.success('Project updated successfully');
      } else {
        await createProject.mutateAsync(projectData);
        toast.success('Project created successfully');
      }
      handleCloseDialog();
    } catch (error: any) {
      const errorMessage = error?.message || 'An error occurred';
      if (errorMessage.includes('Unauthorized')) {
        toast.error('Unauthorized: Only admins can manage projects');
      } else {
        toast.error(`Failed to ${editingProject ? 'update' : 'create'} project: ${errorMessage}`);
      }
    }
  };

  const handleDelete = async (id: bigint) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      await deleteProject.mutateAsync(id);
      toast.success('Project deleted successfully');
    } catch (error: any) {
      const errorMessage = error?.message || 'An error occurred';
      if (errorMessage.includes('Unauthorized')) {
        toast.error('Unauthorized: Only admins can delete projects');
      } else {
        toast.error(`Failed to delete project: ${errorMessage}`);
      }
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-card/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Manage Commercial Projects</CardTitle>
              <CardDescription>Add, edit, or remove project listings</CardDescription>
            </div>
            <Button onClick={() => handleOpenDialog()} className="gap-2">
              <Plus className="h-4 w-4" />
              Add Project
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {projects.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No projects yet. Click "Add Project" to create your first listing.
            </p>
          ) : (
            <div className="space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id.toString()}
                  className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/50"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {project.location} • {project.carpetArea} • {project.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenDialog(project)}
                      className="gap-2"
                    >
                      <Edit className="h-3.5 w-3.5" />
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(project.id)}
                      className="gap-2"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingProject ? 'Edit Project' : 'Add New Project'}</DialogTitle>
            <DialogDescription>
              {editingProject
                ? 'Update the project details below'
                : 'Fill in the details for the new commercial project'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Premium Office Space"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., Hinjewadi, Pune"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="carpetArea">Carpet Area *</Label>
                <Input
                  id="carpetArea"
                  value={formData.carpetArea}
                  onChange={(e) => setFormData({ ...formData, carpetArea: e.target.value })}
                  placeholder="e.g., 1200 sq ft"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price *</Label>
                <Input
                  id="price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="e.g., ₹95 Lakhs"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="highlights">Highlights</Label>
              <Textarea
                id="highlights"
                value={formData.highlights}
                onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                placeholder="Enter highlights separated by commas (e.g., Ready to Move, Prime Location, High ROI)"
                rows={3}
              />
              <p className="text-xs text-muted-foreground">
                Separate multiple highlights with commas
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactDetails">Contact Button Text *</Label>
              <Input
                id="contactDetails"
                value={formData.contactDetails}
                onChange={(e) => setFormData({ ...formData, contactDetails: e.target.value })}
                placeholder="e.g., Get Best Price"
                required
              />
            </div>

            <DialogFooter className="gap-2">
              <Button type="button" variant="outline" onClick={handleCloseDialog}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={createProject.isPending || updateProject.isPending}
              >
                {createProject.isPending || updateProject.isPending
                  ? 'Saving...'
                  : editingProject
                  ? 'Update Project'
                  : 'Create Project'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
