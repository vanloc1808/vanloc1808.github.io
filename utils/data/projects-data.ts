import { Project } from '@/types/project';

interface MultilingualProjectsData {
  en: Project[];
  vi: Project[];
}

export const projectsData: MultilingualProjectsData = {
  en: [
    {
      id: 6,
      name: 'Fake News Analysis and Detection',
      description:
        'This is my undergraduate thesis. This combines the output of our end-to-end networks for cheapfakes detection, a reputation online checking flow, and a system for advising users on the reality of the news they are reading.',
      tools: ['Python', 'PyTorch', 'Streamlit'],
      role: 'Co-main Developer',
      code: 'https://github.com/nbtin/fakenews-detection-demo',
      demo: 'https://youtu.be/INMS347zwS4',
      image: '/image/crefin.jpg',
    },
    {
      id: 5,
      name: 'Connect',
      description:
        'A powerful chat-app with features like Telegram. This is the project for Software Architecture course.',
      tools: [
        'ReactJS',
        'Django REST Framework',
        'PostgreSQL',
        'Supabase',
        'Docker',
        'Jenkins',
        'GitHub Actions',
      ],
      role: 'Backend Developer',
      backend_code:
        'https://github.com/software-architecture-20tn/chat-app-backend',
      frontend_code:
        'https://github.com/software-architecture-20tn/chat-app-frontend',
      demo: '',
      image: '/image/crefin.jpg',
    },
    {
      id: 4,
      name: 'MiniShopping',
      description:
        'A mobile application for e-commerce, allow users to buy online products. This is the project for Mobile Development course.',
      tools: ['Android', 'Django REST Framework', 'NoSQL'],
      role: 'Android Developer',
      backend_code: 'https://github.com/hungt1/MiniShoppingServer',
      frontend_code: 'https://github.com/mekanican/MiniShopping',
      demo: '',
      image: '/image/crefin.jpg',
    },
    {
      id: 3,
      name: 'PC Control via Email',
      description:
        'A program that allows users to remotely control their computers using their emails. This is the project for Computer Network course.',
      tools: ['Python', 'Socket'],
      role: 'Socket Programmer',
      code: 'https://github.com/vanloc1808/computer-network-projects/tree/main/Socket-Email',
      demo: '',
      image: '/image/crefin.jpg',
    },
    {
      id: 2,
      name: 'Chess Game',
      description:
        'An offline game that allows PvP chess between two people. This is the project for Object-Oriented Programming course.',
      tools: ['C++'],
      role: 'Main Developer',
      code: 'https://github.com/vanloc1808/chess-game',
      demo: '',
      image: '/image/crefin.jpg',
    },
    {
      id: 1,
      name: 'Search Engine',
      description:
        'An application that allows users to search for a string on a given dataset of text files. This is the project for Arts of Programming course.',
      tools: ['C++'],
      role: 'Developer',
      code: 'https://github.com/vanloc1808/search-engine',
      demo: '',
      image: '/image/crefin.jpg',
    },
    {
      id: 0,
      name: 'Big Integers',
      description:
        'An application that performs arithmetic operations, logic operations on Big Integers. This is the project for Arts of Programming course.',
      tools: ['C++'],
      role: 'Developer',
      code: 'https://github.com/mekanican/BigInteger',
      demo: '',
      image: '/image/crefin.jpg',
    },
  ],
  vi: [
    {
      id: 6,
      name: 'Fake News Analysis and Detection',
      description:
        'Đây là luận văn tốt nghiệp đại học của tôi. Kết hợp đầu ra của các mạng end-to-end cho việc phát hiện cheapfakes, quy trình kiểm tra uy tín trực tuyến, và hệ thống tư vấn người dùng về tính thực tế của tin tức họ đang đọc.',
      tools: ['Python', 'PyTorch', 'Streamlit'],
      role: 'Đồng chính phát triển',
      code: 'https://github.com/nbtin/fakenews-detection-demo',
      demo: 'https://youtu.be/INMS347zwS4',
      image: '/image/crefin.jpg',
    },
    {
      id: 5,
      name: 'Connect',
      description:
        'Một ứng dụng chat mạnh mẽ với các tính năng như Telegram. Đây là dự án cho môn Kiến trúc Phần mềm.',
      tools: [
        'ReactJS',
        'Django REST Framework',
        'PostgreSQL',
        'Supabase',
        'Docker',
        'Jenkins',
        'GitHub Actions',
      ],
      role: 'Nhà phát triển Backend',
      backend_code:
        'https://github.com/software-architecture-20tn/chat-app-backend',
      frontend_code:
        'https://github.com/software-architecture-20tn/chat-app-frontend',
      demo: '',
      image: '/image/crefin.jpg',
    },
    {
      id: 4,
      name: 'MiniShopping',
      description:
        'Ứng dụng di động cho thương mại điện tử, cho phép người dùng mua sản phẩm trực tuyến. Đây là dự án cho môn Phát triển Di động.',
      tools: ['Android', 'Django REST Framework', 'NoSQL'],
      role: 'Nhà phát triển Android',
      backend_code: 'https://github.com/hungt1/MiniShoppingServer',
      frontend_code: 'https://github.com/mekanican/MiniShopping',
      demo: '',
      image: '/image/crefin.jpg',
    },
    {
      id: 3,
      name: 'PC Control via Email',
      description:
        'Một chương trình cho phép người dùng điều khiển máy tính từ xa bằng email của họ. Đây là dự án cho môn Mạng Máy tính.',
      tools: ['Python', 'Socket'],
      role: 'Lập trình viên Socket',
      code: 'https://github.com/vanloc1808/computer-network-projects/tree/main/Socket-Email',
      demo: '',
      image: '/image/crefin.jpg',
    },
    {
      id: 2,
      name: 'Chess Game',
      description:
        'Một game offline cho phép chơi cờ vua PvP giữa hai người. Đây là dự án cho môn Lập trình Hướng đối tượng.',
      tools: ['C++'],
      role: 'Nhà phát triển chính',
      code: 'https://github.com/vanloc1808/chess-game',
      demo: '',
      image: '/image/crefin.jpg',
    },
    {
      id: 1,
      name: 'Search Engine',
      description:
        'Ứng dụng cho phép người dùng tìm kiếm một chuỗi trong tập dữ liệu các file văn bản đã cho. Đây là dự án cho môn Nghệ thuật Lập trình.',
      tools: ['C++'],
      role: 'Nhà phát triển',
      code: 'https://github.com/vanloc1808/search-engine',
      demo: '',
      image: '/image/crefin.jpg',
    },
    {
      id: 0,
      name: 'Big Integers',
      description:
        'Ứng dụng thực hiện các phép toán số học, phép toán logic trên số nguyên lớn. Đây là dự án cho môn Nghệ thuật Lập trình.',
      tools: ['C++'],
      role: 'Nhà phát triển',
      code: 'https://github.com/mekanican/BigInteger',
      demo: '',
      image: '/image/crefin.jpg',
    },
  ],
};

// Helper function to get projects data based on locale
export const getProjectsData = (locale: 'en' | 'vi' = 'en'): Project[] => {
  return projectsData[locale];
};
