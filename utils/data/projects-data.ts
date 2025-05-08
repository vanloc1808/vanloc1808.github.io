import crefin from "/public/image/crefin.jpg";

interface Project {
  id: number;
  name: string;
  tools: string[];
  role: string;
  description: string;
  code?: string;
  backend_code?: string;
  frontend_code?: string;
  demo?: string;
  image?: any;
}

export const projectsData: Project[] = [
    {
      id: 1,
      name: "Connect",
      description: "A powerful chat-app with features like Telegram. This is the project for Software Architecture course.",
      tools: ["ReactJS", "Django REST Framework", "PostgreSQL", "Supabase", "Docker", "Jenkins", "GitHub Actions"],
      role: "Backend Developer",
      backend_code: "https://github.com/software-architecture-20tn/chat-app-backend",
      frontend_code: "https://github.com/software-architecture-20tn/chat-app-frontend",
      demo: "",
      image: crefin,
  },
  {
      id: 2,
      name: "MiniShopping",
      description: "A mobile application for e-commerce, allow users to buy online products. This is the project for Mobile Development course.",
      tools: ["Android", "Django REST Framework", "NoSQL"],
      role: "Android Developer",
      backend_code: "https://github.com/hungt1/MiniShoppingServer",
      frontend_code: "https://github.com/mekanican/MiniShopping",
      demo: "",
      image: crefin,
  },
  {
      id: 3,
      name: "PC Control via Email",
      description: "A program that allows users to remotely control their computers using their emails. This is the project for Computer Network course.",
      tools: ["Python", "Socket"],
      role: "Socket Programmer",
      code: "https://github.com/vanloc1808/computer-network-projects/tree/main/Socket-Email",
      demo: "",
      image: crefin,
  },
  {
      id: 4,
      name: "Chess Game",
      description: "An offline game that allows PvP chess between two people. This is the project for Object-Oriented Programming course.",
      tools: ["C++"],
      role: "Main Developer",
      code: "https://github.com/vanloc1808/chess-game",
      demo: "",
      image: crefin,
  },
  {
      id: 5,
      name: "Search Engine",
      description: "An application that allows users to search for a string on a given dataset of text files. This is the project for Arts of Programming course.",
      tools: ["C++"],
      role: "Developer",
      code: "https://github.com/vanloc1808/search-engine",
      demo: "",
      image: crefin,
  },
  {
      id: 6,
      name: "Big Integers",
      description: "An application that performs arithmetic operations, logic operations on Big Integers. This is the project for Arts of Programming course.",
      tools: ["C++"],
      role: "Developer",
      code: "https://github.com/mekanican/BigInteger",
      demo: "",
      image: crefin,
  },
];