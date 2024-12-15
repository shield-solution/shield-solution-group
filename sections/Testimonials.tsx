import React from 'react';

import TestimonialsCard from '@/components/TestimonialsCard';
import { TESTIMONIALS } from '@/constants';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="mt-28 py-12 bg-primary mask-image-[linear-gradient(to_bottom,transparent,#0099cc_10%,#0077cc_90%,transparent)]">
        <h2 className="text-white max-w-xs text-2xl font-semibold text-center mx-auto">
          Read Honest Reviews of what Clients Say About Us!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              className={`${
                index === TESTIMONIALS.length - 1
                  ? 'lg:col-start-2 lg:col-span-1' // Center the last item in large screens (lg)
                  : ''
              }`}
              key={testimonial.name}
            >
              <TestimonialsCard
                name={testimonial.name}
                company={testimonial.company}
                review={testimonial.review}
                rating={testimonial.rating}
                imageSrc={testimonial.imageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
