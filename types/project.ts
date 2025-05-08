export interface Project {
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