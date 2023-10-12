import { cn } from '@/libs/utils';

interface HeaderPricingProps {
  plan: string;
  onClickMonthly: () => void;
  onClickYearly: () => void;
}

const HeaderPricing = ({
  plan,
  onClickMonthly,
  onClickYearly,
}: HeaderPricingProps) => {
  return (
    <ul
      className={cn(
        'relative p-2 bg-gray-950 text-white flex items-center rounded-full before:absolute before:top-1/2 before:w-1/2 before:h-[86%] before:-translate-y-1/2 before:bg-primary before:rounded-full transition-all duration-300 before:transition-all before:duration-300',
        plan === 'monthly' ? 'before:left-1' : 'before:left-[84px]'
      )}
    >
      <li>
        <button
          onClick={onClickMonthly}
          className={cn(
            'w-20 h-12 rounded-full relative z-10',
            plan === 'monthly' && ''
          )}
        >
          Monthly
        </button>
      </li>
      <li>
        <button
          onClick={onClickYearly}
          className={cn(
            'w-20 h-12 rounded-full relative z-10',
            plan === 'yearly' && ''
          )}
        >
          Yearly
        </button>
      </li>
    </ul>
  );
};

export default HeaderPricing;
