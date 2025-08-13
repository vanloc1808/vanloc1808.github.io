/**
 * Represents a project in the portfolio.
 *
 * This interface defines the structure for project data
 * displayed throughout the portfolio website, including
 * project details, links, and media assets.
 *
 * @interface Project
 * @since 1.0.0
 */
export interface Project {
  /** Unique identifier for the project */
  id: number;

  /** Display name of the project */
  name: string;

  /** Array of technologies, frameworks, and tools used in the project */
  tools: string[];

  /** The role or position held during the project */
  role: string;

  /** Detailed description of the project, its goals, and outcomes */
  description: string;

  /** Optional link to the main project code repository */
  code?: string;

  /** Optional link to the backend code repository if separate from main code */
  backend_code?: string;

  /** Optional link to the frontend code repository if separate from main code */
  frontend_code?: string;

  /** Optional link to live demo or deployed version of the project */
  demo?: string;

  /** Optional project image or screenshot for visual representation */
  image?: any; // TODO: Replace 'any' with proper image type

  blog_url?: string;

  /** Whether the project is completed. If false, it is considered current/in progress. */
  isCompleted: boolean;
}
