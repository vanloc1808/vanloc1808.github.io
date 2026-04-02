export interface Certificate {
  id: number;
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  type: 'award' | 'certificate';
}

interface MultilingualCertificates {
  en: Certificate[];
  vi: Certificate[];
}

export const certificates: MultilingualCertificates = {
  en: [
    {
      id: 4,
      title:
        'Certificate of Completion, International Research Internship Program from the Director General of National Institute of Informatics, Japan',
      organization: 'National Institute of Informatics, Japan',
      location: 'Chiyoda-ku, Tokyo, Japan',
      date: 'March 2026',
      description:
        'The NII International Internship Program is an exchange activity with students from institutions with which NII has concluded a Memorandum of Understanding (MOU) agreement. This incentive program aims at giving interns the opportunity for professional and personal development by engaging in research activities under the guidance and supervision of NII researchers.',
      type: 'certificate',
    },
    {
      id: 1,
      title:
        'Third Prize, The 26th Student Scientific Research Award - Euréka 2024',
      organization:
        'Ho Chi Minh Youth Union & Vietnam National University Ho Chi Minh City',
      location: 'Ho Chi Minh City, Vietnam',
      date: 'December 2024',
      description:
        'Student Scientific Research Award - Euréka is a prestigious award for students interested in scientific research across the country, contributing to the promotion of the scientific research movement of university students. The Ho Chi Minh Youth Union of Ho Chi Minh City hosts the award in collaboration with the National University of Ho Chi Minh City.',
      type: 'award',
    },
    {
      id: 2,
      title: 'Third Prize, The 2024 "AI Challenge" (AIC) of Ho Chi Minh City',
      organization:
        'Department of Information and Communications of Ho Chi Minh City',
      location: 'Ho Chi Minh City, Vietnam',
      date: 'December 2024',
      description:
        'The 2024 AI Challenge is hosted by the Department of Information and Communications of Ho Chi Minh City, aiming to provide information retrieval solutions on Vietnamese news data.',
      type: 'award',
    },
    {
      id: 3,
      title:
        'Certificate of Satisfactory Progress from President of Vietnam National University Ho Chi Minh City',
      organization: 'Vietnam National University Ho Chi Minh City',
      location: 'Ho Chi Minh City, Vietnam',
      date: 'December 2024',
      description:
        'This certificate is awarded by the President of Vietnam National University, Ho Chi Minh City, to students who have graduated with a high distinction degree.',
      type: 'certificate',
    },
  ],
  vi: [
    {
      id: 4,
      title:
        'Certificate of Completion, International Research Internship Program from the Director General of National Institute of Informatics, Japan',
      organization:
        'Viện Tin học Quốc gia Nhật Bản (National Institute of Informatics, Japan)',
      location: 'Chiyoda-ku, Tokyo, Nhật Bản',
      date: 'Tháng 3 năm 2026',
      description:
        'Chương trình Thực tập Nghiên cứu Quốc tế của NII là hoạt động trao đổi với sinh viên từ các cơ sở giáo dục mà NII đã ký kết Biên bản Ghi nhớ (MOU). Chương trình này nhằm tạo cơ hội cho thực tập sinh phát triển cả về chuyên môn lẫn cá nhân thông qua việc tham gia các hoạt động nghiên cứu dưới sự hướng dẫn và giám sát của các nhà nghiên cứu tại NII.',
      type: 'certificate',
    },
    {
      id: 1,
      title:
        'Giải Ba, Giải thưởng Nghiên cứu Khoa học Sinh viên lần thứ 26 - Euréka 2024',
      organization: 'Đoàn Thanh niên TP.HCM & Đại học Quốc gia TP.HCM',
      location: 'Thành phố Hồ Chí Minh, Việt Nam',
      date: 'Tháng 12 năm 2024',
      description:
        'Giải thưởng Nghiên cứu Khoa học Sinh viên - Euréka là giải thưởng uy tín dành cho sinh viên quan tâm đến nghiên cứu khoa học trên toàn quốc, góp phần thúc đẩy phong trào nghiên cứu khoa học của sinh viên đại học. Đoàn Thanh niên Thành phố Hồ Chí Minh tổ chức giải thưởng phối hợp với Đại học Quốc gia Thành phố Hồ Chí Minh.',
      type: 'award',
    },
    {
      id: 2,
      title: 'Giải Ba, Cuộc thi "AI Challenge" (AIC) 2024 của TP.HCM',
      organization: 'Sở Thông tin và Truyền thông TP.HCM',
      location: 'Thành phố Hồ Chí Minh, Việt Nam',
      date: 'Tháng 12 năm 2024',
      description:
        'Cuộc thi AI Challenge 2024 do Sở Thông tin và Truyền thông Thành phố Hồ Chí Minh tổ chức, nhằm mục đích cung cấp giải pháp truy xuất thông tin trên dữ liệu tin tức tiếng Việt.',
      type: 'award',
    },
    {
      id: 3,
      title:
        'Bằng khen từ Giám đốc Đại học Quốc gia TP.HCM cho sinh viên tốt nghiệp loại xuất sắc',
      organization: 'Đại học Quốc gia TP.HCM',
      location: 'Thành phố Hồ Chí Minh, Việt Nam',
      date: 'Tháng 12 năm 2024',
      description:
        'Bằng khen này được trao bởi Giám đốc Đại học Quốc gia Thành phố Hồ Chí Minh cho những sinh viên đã tốt nghiệp với bằng xuất sắc.',
      type: 'certificate',
    },
  ],
};

// Helper function to get certificates based on locale
export const getCertificates = (locale: 'en' | 'vi' = 'en'): Certificate[] => {
  return certificates[locale];
};
