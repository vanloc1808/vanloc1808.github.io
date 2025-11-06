export interface Service {
  id: number;
  name: string;
  description: string;
  /** Primary link to the deployed service */
  url: string;
  /** Technologies used */
  tools: string[];
  /** Optional image or screenshot */
  image?: string;
  /** Optional icon to display in the card header */
  icon?: 'globe' | 'server' | 'cpu' | 'cloud' | 'database' | 'rocket' | 'plug';
  /** Optional path to a custom SVG under `public/` (takes precedence over icon) */
  iconSvg?: string;
  /** Whether the service has been discontinued (shown as a badge) */
  discontinued?: boolean;
}

interface MultilingualServicesData {
  en: Service[];
  vi: Service[];
}

export const servicesData: MultilingualServicesData = {
  en: [
    // {
    //   id: 3,
    //   name: 'Legacy API',
    //   description: 'Deprecated gateway...',
    //   url: 'https://legacy.example.com',
    //   tools: ['Django', 'NGINX'],
    //   icon: 'server',
    //   discontinued: true
    // },
    {
      id: 1,
      name: 'Personal Blog',
      description:
        'My technical blog where I share articles, write-ups, and notes on engineering, AI, and research.',
      url: 'https://blog.nguyenvanloc.com',
      tools: ['Next.js', 'TailwindCSS', 'Vercel'],
      image: '/images/crefin.jpg',
      icon: 'globe',
      discontinued: false,
    },
    {
      id: 2,
      name: 'Portfolio Website',
      description:
        'The portfolio you are viewing now, showcasing projects, publications, and activities.',
      url: 'https://nguyenvanloc.com',
      tools: ['Next.js', 'TypeScript', 'TailwindCSS'],
      image: '/images/crefin.jpg',
      icon: 'globe',
      discontinued: false,
    },
  ],
  vi: [
    {
      id: 1,
      name: 'Blog cá nhân',
      description:
        'Blog kỹ thuật nơi tôi chia sẻ bài viết, ghi chú về kỹ thuật, AI và nghiên cứu.',
      url: 'https://blog.nguyenvanloc.com',
      tools: ['Next.js', 'TailwindCSS', 'Vercel'],
      image: '/images/crefin.jpg',
      icon: 'globe',
      discontinued: false,
    },
    {
      id: 2,
      name: 'Trang portfolio',
      description:
        'Website portfolio bạn đang xem, giới thiệu dự án, ấn phẩm và hoạt động của tôi.',
      url: 'https://nguyenvanloc.com',
      tools: ['Next.js', 'TypeScript', 'TailwindCSS'],
      image: '/images/crefin.jpg',
      icon: 'globe',
      discontinued: false,
    },
  ],
};

export const getServicesData = (locale: 'en' | 'vi' = 'en'): Service[] => {
  return servicesData[locale];
};
