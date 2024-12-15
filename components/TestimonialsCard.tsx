import Image, { StaticImageData } from 'next/image';

type TestimonialCardProps = {
  name: string;
  company: string;
  review: string;
  rating: number;
  imageSrc: StaticImageData;
};

const TestimonialsCard = ({
  name,
  company,
  review,
  rating,
  imageSrc,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center max-w-xs">
      <Image
        src={imageSrc}
        alt={`${name} picture`}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-sm text-slate-500 mb-2">{company}</p>
      <p className="text-sm text-slate-700 mb-4">{review}</p>
      <div className="flex justify-center">
        {Array.from({ length: rating }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-star text-yellow-500"
          >
            {' '}
            <polygon points="12 2 15 8.09 21 8.64 17 13.11 18.18 19.02 12 15.77 5.82 19.02 7 13.11 3 8.64 9 8.09 12 2"></polygon>{' '}
          </svg>
        ))}{' '}
      </div>{' '}
    </div>
  );
};

export default TestimonialsCard;
