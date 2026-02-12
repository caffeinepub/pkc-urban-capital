import { useState } from 'react';
import { useCreateCommercialProject, useUpdateCommercialProject, useDeleteCommercialProject } from '../../hooks/useCommercialProjects';
import type { CommercialProject } from '../../backend';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { COPY } from '../../content/copy';

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
        toast.success(COPY.admin.successUpdate);
      } else {
        await createProject.mutateAsync(projectData);
        toast.success(COPY.admin.successCreate);
      }
      handleCloseDialog();
    } catch (error: any) {
      const errorMessage = error?.message || 'Unknown error';
      if (errorMessage.includes('Unauthorized')) {
        toast.error(COPY.admin.errorUnauthorized);
      } else {
        const action = editingProject ? 'update' : 'create';
        toast.error(COPY.admin.errorCreateUpdate.replace('{action}', action) + `: ${errorMessage}`);
      }
    }
  };

  const handleDelete = async (id: bigint) => {
    if (!confirm(COPY.admin.deleteConfirm)) return;

    try {
      await deleteProject.mutateAsync(id);
      toast.success(COPY.admin.successDelete);
    } catch (error: any) {
      const errorMessage = error?.message || 'Unknown error';
      if (errorMessage.includes('Unauthorized')) {
        toast.error(COPY.admin.errorUnauthorized);
      } else {
        toast.error(`${COPY.admin.errorDelete}: ${errorMessage}`);
      }
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-card/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">{COPY.admin.panelTitle}</CardTitle>
              <CardDescription>{COPY.admin.panelDescription}</CardDescription>
            </div>
            <Button onClick={() => handleOpenDialog()} className="gap-2">
              <Plus className="h-4 w-4" />
              {COPY.admin.addProject}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {projects.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              {COPY.admin.noProjects}
            </p>
          ) : (
            <div className="space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id.toString()}
                  className="flex items-center justify-between p-4 rounded-lg border border-border/40 bg-background/50"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenDialog(project)}
                      className="gap-2"
                    >
                      <Edit className="h-4 w-4" />
                      {COPY.admin.editProject}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(project.id)}
                      className="gap-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      {COPY.admin.deleteProject}
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
            <DialogTitle>
              {editingProject ? COPY.admin.editProject : COPY.admin.addProject}
            </DialogTitle>
            <DialogDescription>
              {editingProject ? COPY.admin.panelDescription : COPY.admin.panelDescription}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">{COPY.admin.formTitle}</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">{COPY.admin.formLocation}</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="carpetArea">{COPY.admin.formCarpetArea}</Label>
                <Input
                  id="carpetArea"
                  value={formData.carpetArea}
                  onChange={(e) => setFormData({ ...formData, carpetArea: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">{COPY.admin.formPrice}</Label>
                <Input
                  id="price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="highlights">{COPY.admin.formHighlights}</Label>
              <Textarea
                id="highlights"
                value={formData.highlights}
                onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                placeholder={COPY.admin.formHighlightsHelp}
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactDetails">{COPY.admin.formContactDetails}</Label>
              <Input
                id="contactDetails"
                value={formData.contactDetails}
                onChange={(e) => setFormData({ ...formData, contactDetails: e.target.value })}
                required
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleCloseDialog}>
                {COPY.admin.cancelButton}
              </Button>
              <Button
                type="submit"
                disabled={createProject.isPending || updateProject.isPending}
              >
                {COPY.admin.saveButton}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
