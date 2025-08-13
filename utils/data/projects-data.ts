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
      isCompleted: true,
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
      isCompleted: true,
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
      isCompleted: true,
    },
    {
      id: 6,
      name: 'Fake News Analysis and Detection',
      description:
        'An advanced undergraduate thesis project that implements a comprehensive fake news detection system using deep learning and computer vision techniques. The system combines end-to-end neural networks for cheapfake detection (manipulated images/videos), integrates online reputation verification workflows, and provides real-time user guidance on news authenticity. Features include automated content analysis, credibility scoring algorithms, and an intuitive Streamlit interface for user interaction. The project demonstrates practical application of PyTorch for computer vision tasks and showcases the importance of media literacy in the digital age.',
      tools: ['Python', 'PyTorch', 'Streamlit'],
      role: 'Co-main Developer',
      code: 'https://github.com/nbtin/fakenews-detection-demo',
      demo: 'https://youtu.be/INMS347zwS4',
      image: '/image/crefin.jpg',
      isCompleted: true,
    },
    {
      id: 5,
      name: 'Connect',
      description:
        'A feature-rich chat application built for the Software Architecture course, demonstrating modern full-stack development practices and microservices architecture. The application features real-time messaging, user authentication, group chat functionality, and file sharing capabilities similar to Telegram. Built with ReactJS frontend and Django REST Framework backend, it showcases proper API design, database optimization with PostgreSQL, and cloud deployment using Supabase. The project implements CI/CD pipelines with Docker, Jenkins, and GitHub Actions, demonstrating professional software development workflows and scalable architecture patterns.',
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
      isCompleted: false,
    },
    {
      id: 4,
      name: 'MiniShopping',
      description:
        'A comprehensive e-commerce mobile application developed for the Mobile Development course, featuring a complete online shopping experience. The app includes user authentication, product catalog with search and filtering, shopping cart management, order processing, and payment integration. Built with native Android development and Django REST Framework backend, it demonstrates mobile app architecture, RESTful API design, and NoSQL database implementation. The project showcases responsive UI design, efficient data handling, and integration between mobile frontend and web backend services.',
      tools: ['Android', 'Django REST Framework', 'NoSQL'],
      role: 'Android Developer',
      backend_code: 'https://github.com/hungt1/MiniShoppingServer',
      frontend_code: 'https://github.com/mekanican/MiniShopping',
      demo: '',
      image: '/image/crefin.jpg',
      isCompleted: false,
    },
    {
      id: 3,
      name: 'PC Control via Email',
      description:
        'An innovative network programming project for the Computer Network course that enables remote computer control through email communication. The system implements a custom email protocol handler that processes specially formatted emails to execute system commands, file operations, and system monitoring tasks. Built using Python socket programming, it demonstrates network protocol design, email parsing, and secure command execution. The project showcases practical application of network programming concepts, including socket communication, protocol design, and system administration automation.',
      tools: ['Python', 'Socket'],
      role: 'Socket Programmer',
      code: 'https://github.com/vanloc1808/computer-network-projects/tree/main/socket_email',
      demo: '',
      image: '/image/crefin.jpg',
      isCompleted: false,
    },
    {
      id: 2,
      name: 'Chess Game',
      description:
        'A sophisticated chess game implementation developed for the Object-Oriented Programming course, featuring a complete chess engine with standard rules and move validation. The application implements a graphical user interface for two-player gameplay, complete move history tracking, and intelligent move suggestion algorithms. Built entirely in C++, it demonstrates advanced object-oriented design principles, including inheritance, polymorphism, and encapsulation. The project showcases complex game logic implementation, efficient data structures for board representation, and user interface design principles.',
      tools: ['C++'],
      role: 'Main Developer',
      code: 'https://github.com/vanloc1808/chess-game',
      demo: '',
      image: '/image/crefin.jpg',
      isCompleted: false,
    },
    {
      id: 1,
      name: 'Search Engine',
      description:
        'A high-performance text search engine developed for the Arts of Programming course, implementing efficient string matching algorithms and data indexing techniques. The application processes large datasets of text files, builds optimized search indices, and provides fast query response times. Features include fuzzy search capabilities, result ranking algorithms, and support for various text file formats. Built in C++, it demonstrates advanced programming concepts such as algorithm optimization, memory management, and efficient data structure implementation for large-scale text processing applications.',
      tools: ['C++'],
      role: 'Developer',
      code: 'https://github.com/vanloc1808/search-engine',
      demo: '',
      image: '/image/crefin.jpg',
      isCompleted: false,
    },
    {
      id: 0,
      name: 'Big Integers',
      description:
        'A comprehensive library for arbitrary-precision arithmetic operations, developed for the Arts of Programming course. The application implements efficient algorithms for performing mathematical operations on integers of unlimited size, including addition, subtraction, multiplication, division, and logical operations. Built in C++, it demonstrates advanced programming concepts such as memory management, algorithm optimization, and mathematical algorithm implementation. The project showcases practical application of number theory concepts and efficient data structure design for handling large numerical computations.',
      tools: ['C++'],
      role: 'Developer',
      code: 'https://github.com/mekanican/BigInteger',
      demo: '',
      image: '/image/crefin.jpg',
      isCompleted: false,
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
      isCompleted: true,
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
      isCompleted: true,
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
      isCompleted: true,
    },
    {
      id: 6,
      name: 'Fake News Analysis and Detection',
      description:
        'Một dự án luận văn tốt nghiệp đại học tiên tiến triển khai hệ thống phát hiện tin giả toàn diện sử dụng kỹ thuật học sâu và thị giác máy tính. Hệ thống kết hợp các mạng neural end-to-end để phát hiện cheapfake (hình ảnh/video bị thao tác), tích hợp quy trình xác minh uy tín trực tuyến, và cung cấp hướng dẫn thời gian thực về tính xác thực của tin tức. Tính năng bao gồm phân tích nội dung tự động, thuật toán tính điểm độ tin cậy, và giao diện Streamlit trực quan cho tương tác người dùng. Dự án thể hiện ứng dụng thực tế của PyTorch cho các tác vụ thị giác máy tính và làm nổi bật tầm quan trọng của việc hiểu biết về truyền thông trong thời đại số.',
      tools: ['Python', 'PyTorch', 'Streamlit'],
      role: 'Đồng chính phát triển',
      code: 'https://github.com/nbtin/fakenews-detection-demo',
      demo: 'https://youtu.be/INMS347zwS4',
      image: '/image/crefin.jpg',
      isCompleted: true,
    },
    {
      id: 5,
      name: 'Connect',
      description:
        'Một ứng dụng chat giàu tính năng được xây dựng cho môn Kiến trúc phần mềm, thể hiện các thực hành phát triển full-stack hiện đại và kiến trúc microservices. Ứng dụng có tính năng nhắn tin thời gian thực, xác thực người dùng, chức năng chat nhóm và chia sẻ tệp tương tự như Telegram. Được xây dựng với frontend ReactJS và backend Django REST Framework, nó thể hiện thiết kế API đúng đắn, tối ưu hóa cơ sở dữ liệu với PostgreSQL, và triển khai đám mây sử dụng Supabase. Dự án triển khai pipeline CI/CD với Docker, Jenkins và GitHub Actions, thể hiện quy trình phát triển phần mềm chuyên nghiệp và các mẫu kiến trúc có thể mở rộng.',
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
      isCompleted: false,
    },
    {
      id: 4,
      name: 'MiniShopping',
      description:
        'Một ứng dụng thương mại điện tử di động toàn diện được phát triển cho môn Phát triển phần mềm cho thiết bị di động, có trải nghiệm mua sắm trực tuyến hoàn chỉnh. Ứng dụng bao gồm xác thực người dùng, danh mục sản phẩm với tìm kiếm và lọc, quản lý giỏ hàng, xử lý đơn hàng và tích hợp thanh toán. Được xây dựng với phát triển Android gốc và backend Django REST Framework, nó thể hiện kiến trúc ứng dụng di động, thiết kế API RESTful và triển khai cơ sở dữ liệu NoSQL. Dự án thể hiện thiết kế UI đáp ứng, xử lý dữ liệu hiệu quả và tích hợp giữa frontend di động và dịch vụ backend web.',
      tools: ['Android', 'Django REST Framework', 'NoSQL'],
      role: 'Nhà phát triển Android',
      backend_code: 'https://github.com/hungt1/MiniShoppingServer',
      frontend_code: 'https://github.com/mekanican/MiniShopping',
      demo: '',
      image: '/image/crefin.jpg',
      isCompleted: false,
    },
    {
      id: 3,
      name: 'PC Control via Email',
      description:
        'Một dự án lập trình mạng sáng tạo cho môn Mạng máy tính cho phép điều khiển máy tính từ xa thông qua giao tiếp email. Hệ thống triển khai một trình xử lý giao thức email tùy chỉnh xử lý các email được định dạng đặc biệt để thực thi lệnh hệ thống, thao tác tệp và tác vụ giám sát hệ thống. Được xây dựng bằng lập trình socket Python, nó thể hiện thiết kế giao thức mạng, phân tích email và thực thi lệnh an toàn. Dự án thể hiện ứng dụng thực tế của các khái niệm lập trình mạng, bao gồm giao tiếp socket, thiết kế giao thức và tự động hóa quản trị hệ thống.',
      tools: ['Python', 'Socket'],
      role: 'Lập trình viên Socket',
      code: 'https://github.com/vanloc1808/computer-network-projects/tree/main/socket_email',
      demo: '',
      image: '/image/crefin.jpg',
      isCompleted: false,
    },
    {
      id: 2,
      name: 'Chess Game',
      description:
        'Một triển khai trò chơi cờ vua tinh vi được phát triển cho môn Phương pháp lập trình hướng đối tượng, có động cơ cờ vua hoàn chỉnh với quy tắc tiêu chuẩn và xác thực nước đi. Ứng dụng triển khai giao diện người dùng đồ họa cho gameplay hai người chơi, theo dõi lịch sử nước đi hoàn chỉnh và thuật toán gợi ý nước đi thông minh. Được xây dựng hoàn toàn bằng C++, nó thể hiện các nguyên tắc thiết kế hướng đối tượng tiên tiến, bao gồm kế thừa, đa hình và đóng gói. Dự án thể hiện triển khai logic trò chơi phức tạp, cấu trúc dữ liệu hiệu quả cho biểu diễn bàn cờ và các nguyên tắc thiết kế giao diện người dùng.',
      tools: ['C++'],
      role: 'Nhà phát triển chính',
      code: 'https://github.com/vanloc1808/chess-game',
      demo: '',
      image: '/image/crefin.jpg',
      isCompleted: false,
    },
    {
      id: 1,
      name: 'Search Engine',
      description:
        'Một công cụ tìm kiếm văn bản hiệu suất cao được phát triển cho môn Kỹ thuật lập trình, triển khai các thuật toán khớp chuỗi hiệu quả và kỹ thuật lập chỉ mục dữ liệu. Ứng dụng xử lý các tập dữ liệu lớn các tệp văn bản, xây dựng chỉ mục tìm kiếm tối ưu và cung cấp thời gian phản hồi truy vấn nhanh. Tính năng bao gồm khả năng tìm kiếm mờ, thuật toán xếp hạng kết quả và hỗ trợ các định dạng tệp văn bản khác nhau. Được xây dựng bằng C++, nó thể hiện các khái niệm lập trình tiên tiến như tối ưu hóa thuật toán, quản lý bộ nhớ và triển khai cấu trúc dữ liệu hiệu quả cho các ứng dụng xử lý văn bản quy mô lớn.',
      tools: ['C++'],
      role: 'Nhà phát triển',
      code: 'https://github.com/vanloc1808/search-engine',
      demo: '',
      image: '/image/crefin.jpg',
      isCompleted: false,
    },
    {
      id: 0,
      name: 'Big Integers',
      description:
        'Một thư viện toàn diện cho các phép toán số học độ chính xác tùy ý, được phát triển cho môn Kỹ thuật lập trình. Ứng dụng triển khai các thuật toán hiệu quả để thực hiện các phép toán toán học trên các số nguyên có kích thước không giới hạn, bao gồm cộng, trừ, nhân, chia và các phép toán logic. Được xây dựng bằng C++, nó thể hiện các khái niệm lập trình tiên tiến như quản lý bộ nhớ, tối ưu hóa thuật toán và triển khai thuật toán toán học. Dự án thể hiện ứng dụng thực tế của các khái niệm lý thuyết số và thiết kế cấu trúc dữ liệu hiệu quả cho việc xử lý các tính toán số học lớn.',
      tools: ['C++'],
      role: 'Nhà phát triển',
      code: 'https://github.com/mekanican/BigInteger',
      demo: '',
      image: '/image/crefin.jpg',
      isCompleted: false,
    },
  ],
};

// Helper function to get projects data based on locale
export const getProjectsData = (locale: 'en' | 'vi' = 'en'): Project[] => {
  return projectsData[locale];
};
