import Image from 'next/image';

import Avatar from '@/components/Avatar';
import people from '@/public/assets/images/people.png';
import profilePic1 from '@/public/assets/images/profile1.jpg';
import profilePic2 from '@/public/assets/images/profile2.jpg';
import profilePic3 from '@/public/assets/images/profile3.jpg';
import profilePic4 from '@/public/assets/images/profile4.jpg';
import triangle from '@/public/assets/images/triangle.svg';

const Hero = () => {
  return (
    <section className="overflow-x-hidden overflow-y-hidden " id="home">
      <div className="container h-[90vh] lg:flex lg:justify-between">
        <div className="pt-12">
          <h1 className="text-[3rem] lg:text-[4rem] font-bold max-w-[327px] lg:max-w-[580px] leading-tight tracking-normal pb-5 text-secondary">
            <span className="text-primary">Protect</span> Your Future.
          </h1>
          <p className="text-sm lg:text-xl text-slate-500 max-w-[330px] lg:max-w-[595px]">
            We understand that unexpected events can have a major impact on your
            life. That&apos;s why we&apos;re committed to providing
            comprehensive insurance coverage to protect you and your assets.
          </p>
          <div className="hidden aspect-video lg:flex items-center group">
            <Avatar className="z-40">
              <Image
                src={profilePic1}
                alt="avatar 1"
                className="rounded-full"
              />
            </Avatar>
            <Avatar className="-ml-6 border-indigo-500 z-30">
              <Image
                src={profilePic2}
                alt="avatar 2"
                className="rounded-full"
              />
            </Avatar>
            <Avatar className="-ml-6 border-amber-500 z-20">
              <Image
                src={profilePic3}
                alt="avatar 3"
                className="rounded-full"
              />
            </Avatar>
            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
              <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                <Image
                  src={profilePic4}
                  alt="avatar 4"
                  className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                />
                {Array.from({ length: 3 }).map((_, i) => (
                  <span
                    className="size-1.5 rounded-full bg-white inline-flex"
                    key={i}
                  ></span>
                ))}
              </div>
            </Avatar>
            <div className="lg:pl-8">
              <h3 className="lg:text-2xl font-bold text-secondary">1000+</h3>
              <p className="lg:text-xl">Customers</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-[920px] h-auto top-16 lg:-top-12 lg:w-[1000px] mx-auto lg:mx-0 z-20 -right-64 lg:-right-[450px]">
            <Image src={people} alt="people" className=" " />
          </div>
          <div className="hidden lg:block absolute z-1 lg:-right-60 -top-56 lg:-top-14 h-auto w-[600px] lg:w-[910px]">
            <Image src={triangle} alt="triangle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
