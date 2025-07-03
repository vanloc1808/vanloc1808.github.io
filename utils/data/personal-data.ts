interface PersonalData {
  name: string;
  designation: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  resume: string;
  profile: string;
  github: string;
  googleScholar: string;
  linkedIn: string;
  facebook: string;
  leetcode: string;
  devUsername: string;
  stackOverflow: string;
}

interface MultilingualPersonalData {
  en: PersonalData;
  vi: PersonalData;
}

export const personalData: MultilingualPersonalData = {
  en: {
    name: 'VAN-LOC NGUYEN',
    profile: '/profile_image.png',
    designation: 'AI Engineer',
    description:
      '👋 My name is Van-Loc Nguyen.\n\n💻 I am a professional and enthusiastic programmer in my daily life.\n\n🚀 I am a quick learner with a self-learning attitude.\n\n🔍 I love to learn and explore new technologies and am passionate about problem-solving.\n\n🤖 I love Artificial Intelligence, especially Computer Vision and Deep Learning.\n\n🐍 My core skill is based on Python and I love almost all of the things with Python.',
    email: 'contact@nguyenvanloc.com',
    phone: '',
    address: 'Chợ Quán Ward, Hồ Chí Minh City, Vietnam',
    github: 'https://github.com/vanloc1808',
    googleScholar:
      'https://scholar.google.com/citations?user=39z1A1IAAAAJ&hl=en',
    facebook: 'https://www.facebook.com/vanloc1808/',
    linkedIn: 'https://www.linkedin.com/in/vanloc1808/',
    // twitter: "https://twitter.com/said7388",
    stackOverflow: 'https://stackoverflow.com/users/20888325/van-loc-nguyen',
    leetcode: 'https://leetcode.com/u/vanloc1808/',
    devUsername: 'vanloc1808',
    resume: '/CV.pdf',
  },
  vi: {
    name: 'NGUYỄN VĂN LỘC',
    profile: '/profile_image.png',
    designation: 'Kỹ sư AI',
    description:
      '👋 Xin chào, tôi là Nguyễn Văn Lộc.\n\n💻 Tôi là một lập trình viên chuyên nghiệp, luôn tràn đầy nhiệt huyết trong công việc hằng ngày.\n\n🚀 Tôi luôn giữ tinh thần tự học cao.\n\n🔍 Tôi đam mê tìm hiểu, khám phá công nghệ mới và yêu thích việc giải quyết các bài toán thực tiễn.\n\n🤖 Tôi đặc biệt yêu thích lĩnh vực Trí tuệ Nhân tạo, nhất là Thị giác Máy tính và Học sâu.\n\n🐍 Kỹ năng chính của tôi là Python, và tôi yêu thích gần như mọi thứ liên quan đến ngôn ngữ này.',
    email: 'contact@nguyenvanloc.com',
    phone: '',
    address: 'Phường Chợ Quán, Thành phố Hồ Chí Minh, Việt Nam',
    github: 'https://github.com/vanloc1808',
    googleScholar:
      'https://scholar.google.com/citations?user=39z1A1IAAAAJ&hl=en',
    facebook: 'https://www.facebook.com/vanloc1808/',
    linkedIn: 'https://www.linkedin.com/in/vanloc1808/',
    stackOverflow: 'https://stackoverflow.com/users/20888325/van-loc-nguyen',
    leetcode: 'https://leetcode.com/u/vanloc1808/',
    devUsername: 'vanloc1808',
    resume: '/CV.pdf',
  },
};

// Helper function to get personal data based on locale
export const getPersonalData = (locale: 'en' | 'vi' = 'en'): PersonalData => {
  return personalData[locale];
};
