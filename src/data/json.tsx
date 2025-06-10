import { ArrowPathIcon,  CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

interface Servce {
  imageUrl: string;
  title: string;
  description: string;
  href?: string;
}

const blogs = [
    {
      id: 1,
      title: "EU survey: record high trust in the EU and strong support for common defence",
      excerpt: "",
      date: "28 May 2025",
      category: "Marketing",
      image: '/assets/blog-images/00-18.jpg',
      readMore: "https://euneighbourseast.eu/news/latest-news/eu-announces-new-strategy-for-secure-prosperous-and-resilient-black-sea-region/"
    },
    {
      id: 2,
      title: "Choose Europe for your startup and scaleup",
      excerpt: "",
      date: "28 May 2025",
      category: "Marketing",
      image: "/assets/blog-images/startup-and-scaleup.jpg",
      readMore: "https://commission.europa.eu/news/choose-europe-your-startup-and-scaleup-2025-05-28_en"
    },
    {
      id: 3,
      title: "New strategy for a closer cooperation with the Black Sea region",
      excerpt: "",
      date: "27 May 2025",
      category: "Marketing",
      image: "/assets/blog-images/00-04.jpg",
      readMore: "https://enlargement.ec.europa.eu/news/new-eu-strategy-secure-prosperous-and-resilient-black-sea-region-2025-05-28_en"
    }
  ];
const features = [
    {
      name: 'Integrity',
      description:
        'We uphold the highest ethical standards in all our interactions and decisions.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Excellence',
      description:
        'We deliver premier quality and value in every service we provide.',
      icon: LockClosedIcon,
    },
    {
      name: 'Collaboration',
      description: 'Synergy is our strength and we build robust and trust-based relationships with our clients and partners.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Accountability',
      description:
        'We take complete responsibility for our actions and their impact on our clients.',
      icon: FingerPrintIcon,
    },
  ]
  
  const services: Servce[] = [
  {
    imageUrl: '/assets/undraw_security_on_re_e491.svg',
    title: 'GCP Audits',
    description:
      'Good Clinical Practice (GCP) Audits ensure compliance with ethical and regulatory standards in clinical research, safeguarding data integrity and patient safety.',
    href: '#',
  },
  {
    imageUrl: '/assets/undraw_all_the_data_re_hh4w.svg',
    title: 'GDP Audits',
    description: "Good Distribution Practice (GDP) Audits ensure the quality and integrity of pharmaceutical products throughout the supply chain, from storage to distribution.",
    href: '#',
  },
  {
    imageUrl: '/assets/glp-icon.svg',
    title: 'GLP Audits',
    description: "Good Laboratory Practice (GLP) Audits ensure the integrity, reliability, and consistency of non-clinical laboratory studies for regulatory compliance.",
    href: '#',
  },
  {
    imageUrl: '/assets/gmp-icon.svg',
        title: "GMP Audits",
        description: "Good Manufacturing Practice (GMP) Audits ensure the quality, safety, and consistency of pharmaceutical and healthcare products by verifying compliance with regulatory standards.",
        href: '#',
    },
      {
        imageUrl: '/assets/pharma-icon.svg',
        title: "GVP Audits",
        description: "Good Pharmacovigilance Practice (GVP) Audits ensure compliance with regulatory standards for monitoring the safety and efficacy of medicinal products throughout their lifecycle.",
        href: '#',
      },
      {
        imageUrl: '/assets/iso-icon.svg',
        title: "ISO 9001 Audits",
        description: "ISO 9001 Audits assess an organization's quality management system to ensure compliance with international standards for consistent quality and continuous improvement.",
        href: '#',
      },
      {
        imageUrl: '/assets/iso-icon.svg',
        title: "ISO 13485 Audits",
        description: "ISO 13485 Audits evaluate the effectiveness of a medical device manufacturer's quality management system, ensuring compliance with regulatory and safety requirements.",
        href: '#',
      },
      {
        imageUrl: '/assets/undraw_security_on_re_e491.svg',
        title: "Gap Analysis",
        description: "Identifying and mitigating risks to safeguard your business operations.",
        href: '#',
      },
      {
        imageUrl: '/assets/iso-icon.svg',
        title: "ISO 13485 Implementation",
        description: "Identifying and mitigating risks to safeguard your business operations.",
        href: '#',
      },
      {
        imageUrl: '/assets/undraw_security_on_re_e491.svg',
        title: "PRRC Support",
        description: "Identifying and mitigating risks to safeguard your business operations.",
        href: '#',
      },
      {
        imageUrl: '/assets/undraw_security_on_re_e491.svg',
        title: "Remediation QMS",
        description: "Identifying and mitigating risks to safeguard your business operations.",
        href: '#',
      },
      {
        imageUrl: '/assets/trainings-icon.svg',
        title: "Training & Compliance",
        description: "Identifying and mitigating risks to safeguard your business operations.",
        href: '#',
      },
];



  const testimonials = [
    {
      name: "Alex Martinez",
      role: "CTO at InnovateX",
      text: "The platform's intuitive interface and robust analytics have revolutionized our decision-making process. It's like having a crystal ball for market trends!",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200",
      companyLogo: "/logos/innovatex.svg",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "E-commerce Director",
      text: "Our conversion rates skyrocketed after implementation. The customer support team is exceptionally responsive and knowledgeable.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200",
      companyLogo: "/logos/ecompro.svg",
      rating: 4.5
    },
    {
      name: "James Wilson",
      role: "Startup Founder",
      text: "This solution scaled perfectly with our growing business needs. The ROI was evident within the first quarter of use. extra text here",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200",
      companyLogo: "/logos/startupzone.svg",
      rating: 5
    },
    {
        name: "Alex Martinez",
        role: "CTO at InnovateX",
        text: "The platform's intuitive interface and robust analytics have revolutionized our decision-making process. It's like having a crystal ball for market trends!",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200",
        companyLogo: "/logos/innovatex.svg",
        rating: 5
      },
      {
        name: "Priya Sharma",
        role: "E-commerce Director",
        text: "Our conversion rates skyrocketed after implementation. The customer support team is exceptionally responsive and knowledgeable.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200",
        companyLogo: "/logos/ecompro.svg",
        rating: 4.5
      },
      {
        name: "James Wilson",
        role: "Startup Founder",
        text: "This solution scaled perfectly with our growing business needs. The ROI was evident within the first quarter of use. extra text here",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200",
        companyLogo: "/logos/startupzone.svg",
        rating: 5
      }
  ];
  


  const words = ["GCP Audits", "GDP Audits", "GLP Audits", "GMP Audits", "GVP Audits", "ISO 9001 Audits", "ISO 13485 Audits", "IT Audits"];

const aboutFeatures = [
  {
    name: '',
    description:
      'With a motive to deliver quality audit services for healthy QMS',
    icon: ArrowRightCircleIcon,
  },
  {
    name: '',
    description: 'Technical and competent auditors with experience',
    icon: ArrowRightCircleIcon,
  },
  {
    name: '',
    description: 'To role success and provide regulatory assurance',
    icon: ArrowRightCircleIcon,
  },
   {
    name: '',
    description: 'We value patient health and safety',
    icon: ArrowRightCircleIcon,
  },
   {
    name: '',
    description: 'Our professionals have great exposure to regulatory requirements and market needs.',
    icon: ArrowRightCircleIcon,
  },
]

export { blogs, features, services, testimonials, words, aboutFeatures };
export type { Servce };