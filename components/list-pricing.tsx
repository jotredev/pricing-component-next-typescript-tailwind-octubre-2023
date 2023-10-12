import {
  featuresAdvanced,
  featuresBasic,
  featuresBusiness,
} from '@/assets/data';
import PricingCard from '@/components/pricing-card';

interface ListPricingProps {
  plan: string;
}

const ListPricing = ({ plan }: ListPricingProps) => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      <li>
        <PricingCard
          plan='Basic'
          price={plan === 'monthly' ? 240 : 190}
          description='Best for personal use'
          features={featuresBasic}
        />
      </li>
      <li>
        <PricingCard
          plan='Advanced'
          price={plan === 'monthly' ? 360 : 260}
          description='Best for professionals'
          features={featuresAdvanced}
          active
        />
      </li>
      <li>
        <PricingCard
          plan='Business'
          price={plan === 'monthly' ? 520 : 490}
          description='Best for companies'
          features={featuresBusiness}
        />
      </li>
    </ul>
  );
};

export default ListPricing;
