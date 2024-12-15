'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Fragment } from 'react';

import { LOGOS } from '@/constants';

const LogoTicker = () => {
  return (
    <section className="pt-12 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-secondary font-bold mb-8 text-base lg:text-xl">
          We&apos;re trusted by
        </h3>
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: '-50%' }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {LOGOS.map((logo) => (
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    key={logo.name}
                    className="w-36 h-16"
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
