interface Education {
  id: number;
  title: string;
  institution: string;
  startYear: number;
  endYear: number | null; // null means "Present"
  logo: string;
  secondLogo: string | null;
}

export const educations: Education[] = [
  {
    id: 1,
    title:
      'Master of Science in Computer Science, majoring in Artificial Intelligence',
    startYear: 2024,
    endYear: null, // Present
    institution:
      'University of Science, Vietnam National University Ho Chi Minh City',
    logo: '/images/education/vnuhcm-logo.png',
    secondLogo: '/images/education/hcmus-logo.png',
  },
  {
    id: 2,
    title: 'Bachelor of Science in Computer Science, Honors Program',
    startYear: 2020,
    endYear: 2024,
    institution:
      'University of Science, Vietnam National University Ho Chi Minh City',
    logo: '/images/education/vnuhcm-logo.png',
    secondLogo: '/images/education/hcmus-logo.png',
  },
  {
    id: 3,
    title: 'Gifted Student on Mathematics',
    startYear: 2017,
    endYear: 2020,
    institution:
      'Le Quy Don High School for Gifted Students, Ba Ria - Vung Tau Province',
    logo: '/images/education/lqd-logo.png',
    secondLogo: null,
  },
].sort((a, b) => {
  // Sort by start year descending (newest first)
  return b.startYear - a.startYear;
});
