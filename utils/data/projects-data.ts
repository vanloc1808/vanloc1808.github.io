import { Project } from '@/types/project';

interface MultilingualProjectsData {
  en: Project[];
  vi: Project[];
}

export const projectsData: MultilingualProjectsData = {
  en: [
    {
      id: 9,
      name: 'SanghaGPT: Multilingual Buddhist Q&A Chatbot',
      description:
        'SanghaGPT is an intelligent, multilingual chatbot designed to answer questions about Buddhist teachings in both English and Vietnamese. Powered by state-of-the-art language models and integrated via the Model Context Protocol (MCP), SanghaGPT enables interactive, context-aware exploration of Buddhist texts such as suttas, commentaries, and traditional scriptures. The project features a robust data pipeline for curating high-quality question-answer pairs, automated evaluation workflows, and rigorous benchmarking against reference answers. With advanced prompt engineering and seamless LLM orchestration, SanghaGPT offers an engaging way for users to deepen their understanding of Buddhist philosophy, practices, and history.',
      tools: [
        'Python',
        'HuggingFace Transformers',
        'Fast API',
        'MCP',
        'LLM',
        'LangChain',
      ],
      role: 'Main Developer',
      code: 'https://github.com/hcmus-project-collection/sanghagpt',
      image: '/image/sanghagpt.png',
      blog_url: 'https://blog.nguyenvanloc.com/blog/20250806-sanghagpt',
    },
    {
      id: 8,
      name: 'Eastern Religion Corpus',
      description:
        'This project focuses on building a high-quality, structured corpus from classical Vietnamese Buddhist texts, such as "Thiền Uyển Tập Anh" and other historical scriptures. The pipeline includes comprehensive PDF preprocessing, automated sentence segmentation, header/footer and poem detection, as well as semantic entity recognition. Advanced regular expressions and natural language processing tools are applied to extract, clean, and normalize data. The final output is a machine-readable corpus that supports research in digital humanities, Buddhist studies, and AI-powered language modeling. This work addresses the unique challenges of digitizing and structuring pre-modern Vietnamese Buddhist literature for modern computational use.',
      tools: ['Python', 'PyPDF', 'Underthesea', 'RegEx'],
      role: 'Co-developer',
      code: 'https://github.com/hcmus-project-collection/eastern-religion-corpus-creation',
      image: '/image/crefin.jpg',
      blog_url:
        'https://blog.nguyenvanloc.com/blog/20250805-eastern-religion-corpus-creation',
    },
    {
      id: 7,
      name: 'GraphRAG: Knowledge-Graph Retrieval System',
      description:
        'A retrieval-augmented generation (RAG) system, integrating local large language models (LLMs) with a knowledge graph to enhance response quality. Automated document ingestion, triplet extraction, and knowledge graph construction were implemented to enable structured reasoning. Vector similarity search (using Milvus) was combined with knowledge graph traversal for hybrid retrieval, resulting in improved answer accuracy and reduced hallucination. A ranking algorithm was created to blend semantic and graph-based results before being passed to the LLM. The solution was deployed with local LLMs (with OpenAI-compatible APIs) for privacy and low-latency inference, with functionalities exposed through FastAPI APIs and a lightweight web interface.',
      tools: ['Python', 'Milvus', 'LLM', 'FastAPI', 'ReactJS'],
      role: 'Main Developer',
      code: 'https://github.com/hcmus-project-collection/graphrag-llm-with-knowledge-base',
      demo: 'https://youtu.be/ulzWoy0RMY4',
      image: '/image/crefin.jpg',
      blog_url:
        'https://blog.nguyenvanloc.com/blog/20250704-graphrag-llm-with-knowledge-base',
    },
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
      id: 9,
      name: 'SanghaGPT: Chatbot Hỏi-Đáp Phật giáo Đa ngôn ngữ',
      description:
        'SanghaGPT là một chatbot thông minh, đa ngôn ngữ được thiết kế để trả lời các câu hỏi về giáo lý Phật giáo bằng cả tiếng Anh và tiếng Việt. Được hỗ trợ bởi các mô hình ngôn ngữ tiên tiến và tích hợp thông qua Model Context Protocol (MCP), SanghaGPT cho phép khám phá tương tác, nhận thức ngữ cảnh các văn bản Phật giáo như kinh sách, chú giải và kinh điển truyền thống. Dự án có tính năng pipeline dữ liệu mạnh mẽ để quản lý các cặp câu hỏi-trả lời chất lượng cao, quy trình đánh giá tự động và benchmark nghiêm ngặt so với câu trả lời tham chiếu. Với kỹ thuật prompt tiên tiến và điều phối LLM liền mạch, SanghaGPT cung cấp cách thức hấp dẫn để người dùng hiểu sâu hơn về triết học, thực hành và lịch sử Phật giáo.',
      tools: [
        'Python',
        'HuggingFace Transformers',
        'Fast API',
        'MCP',
        'LLM',
        'LangChain',
      ],
      role: 'Nhà phát triển chính',
      code: 'https://github.com/hcmus-project-collection/sanghagpt',
      image: '/image/sanghagpt.png',
      blog_url: 'https://blog.nguyenvanloc.com/blog/20250806-sanghagpt',
    },
    {
      id: 8,
      name: 'Kho ngữ liệu Tôn giáo Phương Đông',
      description:
        'Dự án này tập trung vào việc xây dựng một kho ngữ liệu có cấu trúc chất lượng cao từ các văn bản Phật giáo Việt Nam cổ điển, như "Thiền Uyển Tập Anh" và các kinh điển lịch sử khác. Pipeline bao gồm tiền xử lý PDF toàn diện, phân đoạn câu tự động, phát hiện header/footer và thơ, cũng như nhận dạng thực thể ngữ nghĩa. Các biểu thức chính quy tiên tiến và công cụ xử lý ngôn ngữ tự nhiên được áp dụng để trích xuất, làm sạch và chuẩn hóa dữ liệu. Đầu ra cuối cùng là một kho ngữ liệu có thể đọc được bằng máy hỗ trợ nghiên cứu trong nhân văn số, nghiên cứu Phật giáo và mô hình hóa ngôn ngữ được hỗ trợ bởi AI. Công việc này giải quyết những thách thức độc đáo của việc số hóa và cấu trúc hóa văn học Phật giáo Việt Nam tiền hiện đại cho mục đích tính toán hiện đại.',
      tools: ['Python', 'PyPDF', 'Underthesea', 'RegEx'],
      role: 'Đồng phát triển',
      code: 'https://github.com/hcmus-project-collection/eastern-religion-corpus-creation',
      image: '/image/crefin.jpg',
      blog_url:
        'https://blog.nguyenvanloc.com/blog/20250805-eastern-religion-corpus-creation',
    },
    {
      id: 7,
      name: 'GraphRAG: Knowledge-Graph Retrieval System',
      description:
        'Hệ thống tạo sinh tăng cường truy xuất (RAG), tích hợp các mô hình ngôn ngữ lớn (LLM) cục bộ với đồ thị tri thức để nâng cao chất lượng phản hồi. Đã triển khai quy trình tự động hóa thu thập tài liệu, trích xuất triplet và xây dựng đồ thị tri thức để hỗ trợ lập luận có cấu trúc. Tìm kiếm tương tự vector (sử dụng Milvus) được kết hợp với duyệt đồ thị tri thức để truy xuất lai, dẫn đến cải thiện độ chính xác câu trả lời và giảm thiểu ảo giác. Một thuật toán xếp hạng đã được tạo ra để kết hợp kết quả dựa trên ngữ nghĩa và đồ thị trước khi được truyền đến LLM. Giải pháp được triển khai với các LLM cục bộ (với API tương thích OpenAI) để đảm bảo quyền riêng tư và suy luận độ trễ thấp, với các chức năng được tiếp xúc thông qua API FastAPI và giao diện web nhẹ.',
      tools: ['Python', 'Milvus', 'LLM', 'FastAPI', 'ReactJS'],
      role: 'Nhà phát triển chính',
      code: 'https://github.com/hcmus-project-collection/graphrag-llm-with-knowledge-base',
      demo: 'https://youtu.be/ulzWoy0RMY4',
      image: '/image/crefin.jpg',
      blog_url:
        'https://blog.nguyenvanloc.com/blog/20250704-graphrag-llm-with-knowledge-base',
    },
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
        'Một ứng dụng chat mạnh mẽ với các tính năng như Telegram. Đây là dự án cho môn Kiến trúc phần mềm.',
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
        'Ứng dụng di động cho thương mại điện tử, cho phép người dùng mua sản phẩm trực tuyến. Đây là dự án cho môn Phát triển phần mềm cho thiết bị di động.',
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
        'Một chương trình cho phép người dùng điều khiển máy tính từ xa bằng email của họ. Đây là dự án cho môn Mạng máy tính.',
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
        'Một game offline cho phép chơi cờ vua PvP giữa hai người. Đây là dự án cho môn Phương pháp lập trình hướng đối tượng.',
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
        'Ứng dụng cho phép người dùng tìm kiếm một chuỗi trong tập dữ liệu các file văn bản đã cho. Đây là dự án cho môn Kỹ thuật lập trình.',
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
        'Ứng dụng thực hiện các phép toán số học, phép toán logic trên số nguyên lớn. Đây là dự án cho môn Kỹ thuật lập trình.',
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
