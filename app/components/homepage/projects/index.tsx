import { projectsData } from '@/utils/data/projects-data';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import ProjectCard from './project-card';
import { FC } from 'react';

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

const Projects: FC = () => {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443] dark:bg-white"></span>
            <span className="bg-gray-200 dark:bg-[#1a1443] w-fit text-gray-800 dark:text-white px-5 py-3 text-xl rounded-md mx-3">
              PROJECTS
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443] dark:bg-white"></span>
          </div>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project: Project, index: number) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard
                  project={project}
                  identifier={`project-${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/projects"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;