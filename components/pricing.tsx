'use client';

import HeaderPricing from '@/components/header-pricing';
import ListPricing from '@/components/list-pricing';
import { useState } from 'react';

const Pricing = () => {
  const [plan, setPlan] = useState('monthly');

  return (
    <div className='flex flex-col gap-10 items-center justify-center min-h-screen'>
      <HeaderPricing
        plan={plan}
        onClickMonthly={() => setPlan('monthly')}
        onClickYearly={() => setPlan('yearly')}
      />
      <ListPricing plan={plan} />
    </div>
  );
};

export default Pricing;
