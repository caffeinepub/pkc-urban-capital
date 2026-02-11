import { useState, useEffect } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';
import { COPY } from '../../content/copy';

export default function InvestorCalculatorSection() {
  const [propertyPrice, setPropertyPrice] = useState<string>('100');
  const [monthlyRent, setMonthlyRent] = useState<string>('65');
  const [roi, setRoi] = useState<number>(0);

  useEffect(() => {
    const price = parseFloat(propertyPrice) || 0;
    const rent = parseFloat(monthlyRent) || 0;
    
    if (price > 0 && rent > 0) {
      const annualRent = rent * 12;
      const priceInThousands = price * 100;
      const calculatedRoi = (annualRent / priceInThousands) * 100;
      setRoi(calculatedRoi);
    } else {
      setRoi(0);
    }
  }, [propertyPrice, monthlyRent]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary backdrop-blur-sm mb-4">
            <Calculator className="h-4 w-4" />
            <span className="font-medium">Investment Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-foreground">
            {COPY.calculator.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {COPY.calculator.description}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-lg border border-border/40 bg-card p-6 md:p-8 space-y-6">
            {/* Property Price Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                {COPY.calculator.propertyPrice}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                <input
                  type="number"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(e.target.value)}
                  placeholder="100"
                  className="w-full rounded-md border border-input bg-background pl-8 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Monthly Rent Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                {COPY.calculator.monthlyRent}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                <input
                  type="number"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(e.target.value)}
                  placeholder="65"
                  className="w-full rounded-md border border-input bg-background pl-8 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* ROI Output */}
            <div className="pt-4 border-t border-border/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-lg font-medium text-foreground">{COPY.calculator.annualRoi}</span>
                </div>
                <div className="text-3xl font-heading font-bold text-primary">
                  {roi > 0 ? `${roi.toFixed(2)}%` : '0%'}
                </div>
              </div>
              {roi > 0 && (
                <p className="mt-3 text-sm text-muted-foreground">
                  Annual rental income: ₹{(parseFloat(monthlyRent) * 12).toFixed(0)}K
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
