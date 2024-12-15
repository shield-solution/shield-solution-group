import aarpLogo from '@/public/assets/images/aarp.png';
import aetnaLogo from '@/public/assets/images/aetna.png';
import ameritasLogo from '@/public/assets/images/ameritas.jpg';
import anthemLogo from '@/public/assets/images/anthem.png';
import card1 from '@/public/assets/images/card1.svg';
import card2 from '@/public/assets/images/card2.svg';
import card3 from '@/public/assets/images/card3.svg';
import cignaLogo from '@/public/assets/images/cigna.png';
import gtlLogo from '@/public/assets/images/gtl.png';
import humanaLogo from '@/public/assets/images/humana.png';
import manhattanLifeLogo from '@/public/assets/images/manhattanLife.png';
import mutualOfOmahaLogo from '@/public/assets/images/mutualofomaha.png';
import profilePic1 from '@/public/assets/images/profile1.jpg';
import profilePic2 from '@/public/assets/images/profile2.jpg';
import profilePic3 from '@/public/assets/images/profile3.jpg';
import profilePic4 from '@/public/assets/images/profile4.jpg';

export const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '#about',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'FAQs',
    href: '#faqs',
  },
];

export const ClientFormDefaultValues = {
  name: '',
  email: '',
  phone: '',
  budget: '',
};

export const LOGOS = [
  {
    name: 'Aarp',
    image: aarpLogo,
  },
  {
    name: 'Aetna',
    image: aetnaLogo,
  },
  {
    name: 'Ameritas',
    image: ameritasLogo,
  },
  {
    name: 'Anthem',
    image: anthemLogo,
  },
  {
    name: 'Cigna',
    image: cignaLogo,
  },
  {
    name: 'GTL',
    image: gtlLogo,
  },
  {
    name: 'Humana',
    image: humanaLogo,
  },
  {
    name: 'Manhattan Life',
    image: manhattanLifeLogo,
  },
  {
    name: 'Mutual of Omaha',
    image: mutualOfOmahaLogo,
  },
];

export const FEATURES = [
  {
    color: 'bg-none',
    title: 'Healthcare in your fingertips',
    description:
      "That's why we offer personalised support and guidance throughout the insurance process",
    image: card2,
  },
  {
    color: 'bg-primary bg-opacity-50',
    title: 'Protect Your Loved Ones with Our Health Insurance',
    description:
      "Whether you're looking to protect your family's health, your business, or your personal assets, our health insurance plans have got you covered.",
    image: card1,
  },
  {
    color: 'bg-none',
    title: 'Expert Guidance for Your Insurance Needs',
    description:
      'Our experienced team works with a variety of trusted insurance providers to ensure you get the best coverage for your health, life, retirement, and college insurance needs.',
    image: card3,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sam Wiseman',
    company: 'Wiston Furniture',
    review:
      "I've been a customer of this insurance company for years, and I have to say ....",
    rating: 5,
    imageSrc: profilePic1,
  },
  {
    name: 'Nick Polsen',
    company: 'Rapid Exchange',
    review:
      'I switched to this insurance company after having some issues with my previous ...',
    rating: 5,
    imageSrc: profilePic2,
  },
  {
    name: 'Katherine Elsin',
    company: 'BeautybyKay',
    review:
      "I've had the pleasure of working with this insurance company for both my personal ..",
    rating: 5,
    imageSrc: profilePic3,
  },
  {
    name: 'Britney Simms',
    company: 'Hugo Capital',
    review:
      'I have to say that they exceed my expectations every time. Their agents are know ...',
    rating: 5,
    imageSrc: profilePic4,
  },
];

export const FAQs = [
  {
    question:
      'What types of insurance products does Shield Solution Group offer?',
    answer:
      'Shield Solution Group offers a comprehensive range of insurance products, including Health Insurance, Life Insurance, Retirement Insurance, and College Insurance. Our goal is to provide you with the protection and security you need to achieve your financial goals.',
  },
  {
    question: 'How do I choose the right insurance plan for my needs?',
    answer:
      'Our experienced team is here to help you navigate the process and find the right plan for your needs. We offer personalized consultations and assessments to ensure you have the coverage you need. You can also use our online tools and resources to learn more about our products and get a quote.',
  },
  {
    question: 'Can I customize my insurance plan to fit my budget?',
    answer:
      'Yes, we offer flexible payment options and customizable plans to fit your budget. Our team will work with you to create a plan that meets your needs and fits your financial situation. We also offer discounts for bundling multiple policies and for being a loyal customer.',
  },
  {
    question: 'How do I file a claim or access my policy information?',
    answer:
      'You can file a claim or access your policy information online through our secure portal or by contacting our customer service team directly. We are available to assist you 24/7 and will guide you through the process to ensure a smooth and efficient experience.',
  },
  {
    question:
      'What is the process for getting a quote or applying for insurance?',
    answer:
      'Getting a quote or applying for insurance is easy. Simply visit our website, click on the "Get a Quote" button, and fill out the online application. You can also contact our team directly to schedule a consultation and receive a personalized quote. We will guide you through the application process and answer any questions you may have.',
  },
  {
    question:
      'How does Shield Solution Group protect my personal and financial information?',
    answer:
      'At Shield Solution Group, we take the security and confidentiality of your personal and financial information very seriously. We use state-of-the-art encryption and security measures to protect your data and ensure that it is only accessible to authorized personnel. We also comply with all relevant laws and regulations, including HIPAA and GDPR.',
  },
];

export const FOOTER_LINKS = [
  {
    href: '#',
    label: 'Privacy Policy',
  },
  {
    href: '#',
    label: 'Terms & Conditions',
  },
];
