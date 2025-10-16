export type TPricingPlan = {
  id: string;
  name: string;
  tagline: string;
  icon: React.JSX.Element;
  isPopular: boolean;
  price: {
    Monthly: { amount: number; period: string };
    Annual: { amount: number; period: string };
  };
  features: string[];
  cta: string;
};