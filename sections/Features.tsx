import React from 'react';

import FeatureCard from '@/components/FeatureCard';
import { FEATURES } from '@/constants';

const Features = () => {
  return (
    <section className="pt-48" id="about">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h1 className="text-2xl lg:text-4xl font-bold max-w-[363px]">
            What makes Shield Solution Group accessible
          </h1>
          <p className="text-sm lg:text-xl max-w-xl text-slate-600">
            We believe that insurance should provide you with peace of mind,
            knowing that you&apos;re covered in case of an unexpected event.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              color={feature.color}
              description={feature.description}
              image={feature.image}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
