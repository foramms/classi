// NAVIGATION
import TextInput from "@/components/TextInput";

export { TextInput }
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  // { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
  // { href: '/', key: 'services', label: 'Services' },
  // { href: '/', key: 'pricing ', label: 'Pricing ' },
  // { href: '/', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Search For Major Related Classes',
    icon: '/search.svg',
    variant: 'green',
    description:
      'Stay on top of your educational plan by making sure you are taking the major related coursework',
  },
  {
    title: 'Find Updated Syllabi from Previous Students',
    icon: '/document.svg',
    variant: 'green',
    description:
      "Get prepared with course text and material ahead of time, so you are ready to go when classes begin",
  },
  {
    title: 'Read Reviews from Students',
    icon: '/study.svg',
    variant: 'green',
    description:
      'Get to understand the workload of the class and any prior topics to reivew to best prepare yourself.',
  },
  {
    title: 'Connect with Your Peers',
    icon: '/locationblue.svg',
    variant: 'orange',
    description:
      'Build community amongst your peers, share resources such as tutoring hours and build study groups all in one area',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Classi',
      'Privacy Policy',
      'Contact Us',
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Divya Vaddavalli', value: 'dvad@ucdavis.edu' },
    { label: 'Foram Shah', value: 'fshah@ucdavis.edu' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};