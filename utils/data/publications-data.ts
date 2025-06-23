interface Publication {
  id: number;
  title: string;
  conference: string;
  date: string;
  description: string;
  url: string;
}

interface MultilingualPublications {
  en: Publication[];
  vi: Publication[];
}

export const publications: MultilingualPublications = {
  en: [
    {
      id: 6,
      title:
        'NewsInsight2.0: An Enhanced Version Integrating Large Language Model-Based Query Optimization with Advanced Temporal Mechanisms',
      conference:
        'The 13th International Symposium on Information and Communication Technology (SOICT 2024)',
      date: 'December 14, 2024',
      description:
        'We introduce NewsInsight2.0, a cutting-edge evolution of the NewsInsight system, specifically designed for the Ho Chi Minh AI Challenge 2024. Building on the strengths of ViewsInsight, NewsInsight2.0 addresses previous performance limitations with significant enhancements. Our optimized architecture is tailored to deliver exceptional search capabilities for AIC 2024. At its core, NewsInsight2.0 leverages the CLIP (Contrastive Language-Image Pre-training) model, trained on a vast dataset of 5 billion parameters (DFN-5B). Additionally, we have refined our temporal query mechanism with a more efficient algorithm and an intuitive user interface. Furthermore, NewsInsight2.0 features an automatic query generator powered by open-source large language models, streamlining the process of optimizing user input queries.',
      url: 'https://link.springer.com/chapter/10.1007/978-981-96-4291-5_28',
    },
    {
      id: 5,
      title:
        'An Approach to Complex Visual Data Interpretation with Vision-Language Models',
      conference:
        'The 1st Large Vision - Language Model Learning and Applications Workshop, ACCV 2024',
      date: 'December 8, 2024',
      description:
        "Our research adapted the MMMU benchmarks and utilized prompt engineering with a voting-based ensemble method to enhance Large Vision-Language Models' performance on complex visual data interpretation, achieving a top score of 0.85 in the LAVA Workshop 2024 challenge.",
      url: 'https://openaccess.thecvf.com/content/ACCV2024W/LAVA/html/Nguyen_An_Approach_to_Complex_Visual_Data_Interpretation_with_Vision-Language_Models_ACCVW_2024_paper.html',
    },
    {
      id: 4,
      title:
        'AI-Enhanced Photo Authenticity: A User-Focused Approach to Detecting and Analyzing Manipulated Images',
      conference:
        'The 2024 International Conference on Multimedia Analysis and Pattern Recognition (MAPR)',
      date: 'August 16, 2024',
      description:
        'This paper presents the development of an AI-assisted system designed to aid users in identifying and verifying the genuineness of photos.',
      url: 'https://ieeexplore.ieee.org/abstract/document/10661051',
    },
    {
      id: 1,
      title:
        'A Hybrid Approach for Cheapfake Detection Using Reputation Checking and End-To-End Network',
      conference:
        'The 1st Workshop on Security-Centric Strategies for Combating Information Disorder, ACM AsiaCCS 2024',
      date: 'July 2, 2024',
      description:
        'This research highlights the immense promise of using our proposed hybrid method in the fight against Cheapfakes, making a significant contribution to preserving the integrity of multimedia content.',
      url: 'https://dl.acm.org/doi/10.1145/3660512.3665521',
    },
    {
      id: 2,
      title:
        'A Unified Network for Detecting Out-Of-Context Information Using Generative Synthetic Data',
      conference:
        'The 2024 International Conference on Multimedia Retrieval (ACM ICMR 2024)',
      date: 'June 11, 2024',
      description:
        'This paper highlights the notable potential of employing an end-to-end network for Cheapfakes detection, which composes a significant contribution to the advancement of multimedia content integrity.',
      url: 'https://dl.acm.org/doi/abs/10.1145/3652583.3657599',
    },
    {
      id: 3,
      title: 'Transparent Tracking of Spermatozoa with YOLOv8',
      conference: 'The MediaEval 2023 Workshop, MMM 2024',
      date: 'February 1, 2024',
      description:
        'A research for pointing out an efficient method for detection and tracking of spermatozoa, with YOLOv8 trained on a a COCO-format dataset.',
      url: 'https://ceur-ws.org/Vol-3658/paper21.pdf',
    },
  ],
  vi: [
    {
      id: 6,
      title:
        'NewsInsight2.0: An Enhanced Version Integrating Large Language Model-Based Query Optimization with Advanced Temporal Mechanisms',
      conference:
        'The 13th International Symposium on Information and Communication Technology (SOICT 2024)',
      date: '14 tháng 12, 2024',
      description:
        'We introduce NewsInsight2.0, a cutting-edge evolution of the NewsInsight system, specifically designed for the Ho Chi Minh AI Challenge 2024. Building on the strengths of ViewsInsight, NewsInsight2.0 addresses previous performance limitations with significant enhancements. Our optimized architecture is tailored to deliver exceptional search capabilities for AIC 2024. At its core, NewsInsight2.0 leverages the CLIP (Contrastive Language-Image Pre-training) model, trained on a vast dataset of 5 billion parameters (DFN-5B). Additionally, we have refined our temporal query mechanism with a more efficient algorithm and an intuitive user interface. Furthermore, NewsInsight2.0 features an automatic query generator powered by open-source large language models, streamlining the process of optimizing user input queries.',
      url: 'https://link.springer.com/chapter/10.1007/978-981-96-4291-5_28',
    },
    {
      id: 5,
      title:
        'An Approach to Complex Visual Data Interpretation with Vision-Language Models',
      conference:
        'The 1st Large Vision - Language Model Learning and Applications Workshop, ACCV 2024',
      date: '8 tháng 12, 2024',
      description:
        "Our research adapted the MMMU benchmarks and utilized prompt engineering with a voting-based ensemble method to enhance Large Vision-Language Models' performance on complex visual data interpretation, achieving a top score of 0.85 in the LAVA Workshop 2024 challenge.",
      url: 'https://openaccess.thecvf.com/content/ACCV2024W/LAVA/html/Nguyen_An_Approach_to_Complex_Visual_Data_Interpretation_with_Vision-Language_Models_ACCVW_2024_paper.html',
    },
    {
      id: 4,
      title:
        'AI-Enhanced Photo Authenticity: A User-Focused Approach to Detecting and Analyzing Manipulated Images',
      conference:
        'The 2024 International Conference on Multimedia Analysis and Pattern Recognition (MAPR)',
      date: '16 tháng 8, 2024',
      description:
        'This paper presents the development of an AI-assisted system designed to aid users in identifying and verifying the genuineness of photos.',
      url: 'https://ieeexplore.ieee.org/abstract/document/10661051',
    },
    {
      id: 1,
      title:
        'A Hybrid Approach for Cheapfake Detection Using Reputation Checking and End-To-End Network',
      conference:
        'The 1st Workshop on Security-Centric Strategies for Combating Information Disorder, ACM AsiaCCS 2024',
      date: '2 tháng 7, 2024',
      description:
        'This research highlights the immense promise of using our proposed hybrid method in the fight against Cheapfakes, making a significant contribution to preserving the integrity of multimedia content.',
      url: 'https://dl.acm.org/doi/10.1145/3660512.3665521',
    },
    {
      id: 2,
      title:
        'A Unified Network for Detecting Out-Of-Context Information Using Generative Synthetic Data',
      conference:
        'The 2024 International Conference on Multimedia Retrieval (ACM ICMR 2024)',
      date: '11 tháng 6, 2024',
      description:
        'This paper highlights the notable potential of employing an end-to-end network for Cheapfakes detection, which composes a significant contribution to the advancement of multimedia content integrity.',
      url: 'https://dl.acm.org/doi/abs/10.1145/3652583.3657599',
    },
    {
      id: 3,
      title: 'Transparent Tracking of Spermatozoa with YOLOv8',
      conference: 'The MediaEval 2023 Workshop, MMM 2024',
      date: '1 tháng 2, 2024',
      description:
        'A research for pointing out an efficient method for detection and tracking of spermatozoa, with YOLOv8 trained on a a COCO-format dataset.',
      url: 'https://ceur-ws.org/Vol-3658/paper21.pdf',
    },
  ],
};

// Helper function to get publications based on locale
export const getPublications = (locale: 'en' | 'vi' = 'en'): Publication[] => {
  return publications[locale];
};

// For backward compatibility
export const publicationsData: Publication[] = publications.en;
