import { useState } from 'react';
import { useSaveCallerUserProfile } from '../../hooks/useUserProfile';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { COPY } from '../../content/copy';

interface ProfileSetupModalProps {
  open: boolean;
}

export default function ProfileSetupModal({ open }: ProfileSetupModalProps) {
  const [name, setName] = useState('');
  const saveProfile = useSaveCallerUserProfile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await saveProfile.mutateAsync({ name: name.trim() });
    } catch (error) {
      console.error('Failed to save profile:', error);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>{COPY.auth.profileSetupTitle}</DialogTitle>
          <DialogDescription>
            {COPY.auth.profileSetupDescription}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{COPY.auth.profileSetupNameLabel}</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={COPY.auth.profileSetupNamePlaceholder}
              required
              autoFocus
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={!name.trim() || saveProfile.isPending}
          >
            {saveProfile.isPending ? COPY.auth.profileSetupSaving : COPY.auth.profileSetupContinue}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
