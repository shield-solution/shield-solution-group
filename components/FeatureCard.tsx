import Image from 'next/image';

import { cn } from '@/lib/utils';

type FeatureCardProps = {
  color?: string;
  title: string;
  description: string;
  image: string;
};

const FeatureCard = ({
  color,
  title,
  description,
  image,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        'px-8 py-12 overflow-y-clip',
        color,
        color === 'bg-none' ? 'border border-slate-300' : '',
      )}
    >
      <div>
        <h3
          className={cn(
            'text-sm lg:text-xl font-bold text-white',
            color === 'bg-none' ? 'text-secondary' : 'text-white',
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            'text-sm lg:text-xl pt-5',
            color === 'bg-none' ? 'text-slate-500' : 'text-white/80',
          )}
        >
          {description}
        </p>
      </div>
      <div className="relative h-auto max-w-56 -bottom-36 -right-20">
        <Image src={image} alt="icon" />
      </div>
    </div>
  );
};

export default FeatureCard;
