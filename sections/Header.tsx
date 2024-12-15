'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/constants';
import { cn } from '@/lib/utils';
import logo from '@/public/assets/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="">
      <div className="container flex justify-between items-center py-4 bg-transparent">
        <Link href="/" className="relative h-auto w-[120px]">
          <Image src={logo} alt="logo" />
        </Link>

        <nav className="hidden lg:inline-flex">
          <ul className="flex items-center gap-16">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-secondary font-semibold text-xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu  mr-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              className={cn(
                'origin-left transition',
                isOpen && 'rotate-45 -translate-y-1',
              )}
            ></line>
            {/* <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              className={cn('transition', isOpen && 'opacity-0')}
            ></line> */}
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              className={cn(
                'origin-left transition',
                isOpen && '-rotate-45 translate-y-1',
              )}
            ></line>
          </svg>
        </div>

        <div className="hidden lg:inline-flex">
          <Button className="bg-primary text-white">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="flex flex-col items-center overflow-hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.label} className="py-2">
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
