import Details from '@/sections/Details';
import Faqs from '@/sections/Faqs';
import Features from '@/sections/Features';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Testimonials from '@/sections/Testimonials';

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Details />
      <Features />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
};

export default page;
