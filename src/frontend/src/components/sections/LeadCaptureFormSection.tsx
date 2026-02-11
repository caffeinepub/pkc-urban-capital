import { forwardRef, useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useSubmitLead } from '../../hooks/useQueries';
import { PropertyType, UsageType } from '../../backend';
import { COPY } from '../../content/copy';

const LeadCaptureFormSection = forwardRef<HTMLElement>((_, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: '',
    propertyType: 'commercial' as keyof typeof PropertyType,
    usageType: 'investment' as keyof typeof UsageType
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const submitLead = useSubmitLead();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = COPY.leadForm.validation.nameRequired;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = COPY.leadForm.validation.phoneRequired;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = COPY.leadForm.validation.phoneInvalid;
    }

    if (!formData.budget.trim()) {
      newErrors.budget = COPY.leadForm.validation.budgetRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await submitLead.mutateAsync({
        name: formData.name,
        phone: formData.phone,
        budget: formData.budget,
        propertyType: PropertyType[formData.propertyType],
        usageType: UsageType[formData.usageType]
      });

      setShowSuccess(true);
      setFormData({
        name: '',
        phone: '',
        budget: '',
        propertyType: 'commercial',
        usageType: 'investment'
      });
      setErrors({});
    } catch (error) {
      console.error('Lead submission error:', error);
    }
  };

  if (showSuccess) {
    return (
      <section ref={ref} className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-lg border border-primary/40 bg-card p-8 md:p-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border-2 border-primary">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {COPY.leadForm.successTitle}
                </h3>
                <p className="text-muted-foreground">
                  {COPY.leadForm.successMessage}
                </p>
              </div>
              <button
                onClick={() => setShowSuccess(false)}
                className="inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground">
            {COPY.leadForm.title}
          </h2>
          <p className="text-lg md:text-xl text-primary font-medium">
            {COPY.leadForm.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="rounded-lg border border-border/40 bg-card p-6 md:p-8 space-y-6">
            {submitLead.isError && (
              <div className="flex items-start gap-3 rounded-md border border-destructive/50 bg-destructive/10 p-4">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-semibold text-destructive">{COPY.leadForm.errorTitle}</div>
                  <div className="text-sm text-destructive/90">{COPY.leadForm.errorMessage}</div>
                </div>
              </div>
            )}

            {/* Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                {COPY.leadForm.name} <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full rounded-md border ${errors.name ? 'border-destructive' : 'border-input'} bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                {COPY.leadForm.phone} <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full rounded-md border ${errors.phone ? 'border-destructive' : 'border-input'} bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                placeholder="10-digit mobile number"
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                {COPY.leadForm.budget} <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className={`w-full rounded-md border ${errors.budget ? 'border-destructive' : 'border-input'} bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                placeholder="e.g., ₹50L - ₹1Cr"
              />
              {errors.budget && <p className="text-sm text-destructive">{errors.budget}</p>}
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                {COPY.leadForm.propertyType}
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as keyof typeof PropertyType })}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="commercial">Commercial</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="land">Land</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Usage Type */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                {COPY.leadForm.usageType}
              </label>
              <select
                value={formData.usageType}
                onChange={(e) => setFormData({ ...formData, usageType: e.target.value as keyof typeof UsageType })}
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="investment">Investment</option>
                <option value="selfUse">Self Use</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitLead.isPending}
              className="w-full inline-flex items-center justify-center rounded-md text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-gold-glow"
            >
              {submitLead.isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {COPY.leadForm.submitting}
                </>
              ) : (
                COPY.leadForm.submit
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

LeadCaptureFormSection.displayName = 'LeadCaptureFormSection';

export default LeadCaptureFormSection;
