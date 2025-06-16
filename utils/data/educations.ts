interface Education {
  id: number;
  title: string;
  institution: string;
  duration: string;
  logo: string;
  secondLogo: string | null;
}

export const educations: Education[] = [
  {
    id: 1,
    title:
      'Master of Science in Computer Science, majoring in Artificial Intelligence',
    duration: 'Dec 2024 - Present',
    institution:
      'University of Science, Vietnam National University Ho Chi Minh City',
    logo: '/images/education/vnuhcm-logo.png',
    secondLogo: '/images/education/hcmus-logo.png',
  },
  {
    id: 2,
    title: 'Bachelor of Science in Computer Science, Honors Program',
    duration: 'Oct 2020 - Oct 2024',
    institution:
      'University of Science, Vietnam National University Ho Chi Minh City',
    logo: '/images/education/vnuhcm-logo.png',
    secondLogo: '/images/education/hcmus-logo.png',
  },
];
