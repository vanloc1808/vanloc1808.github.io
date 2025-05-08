import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "./glow-card";
import { FC } from 'react';

interface Publication {
  id: number;
  title: string;
  conference: string;
  date: string;
  description: string;
  url: string;
}

interface PublicationCardProps {
  publication: Publication;
  identifier: string;
}

const PublicationCard: FC<PublicationCardProps> = ({ publication, identifier }) => {
  return (
    <a href={publication.url} target="_blank" rel="noopener noreferrer" className="block hover:scale-[1.02] transition-transform duration-300">
      <GlowCard identifier={identifier}>
        <div className="p-3 relative">
          <Image
            src="/blur-23.svg"
            alt="Hero"
            width={1080}
            height={200}
            className="absolute bottom-0 opacity-80"
          />
          <div className="flex items-start gap-x-4 px-3 py-4">
            <div className="text-violet-500 transition-all duration-300 hover:scale-125 mt-1">
              <BsPersonWorkspace size={32} />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-base sm:text-lg mb-2 font-medium uppercase break-words">
                {publication.title}
              </p>
              <p className="text-xs sm:text-sm text-[#16f2b3] mb-1">
                Published at {publication.conference}
              </p>
              <p className="text-xs sm:text-sm text-[#df7518] mb-2">
                {publication.date}
              </p>
              <p className="text-sm sm:text-base mb-2 break-words">
                {publication.description}
              </p>
              <p className="text-xs sm:text-sm text-[#16f2b3] break-all">
                <span className="text-[#16f2b3] hover:text-[#df7518]">
                  {publication.url}
                </span>
              </p>
            </div>
          </div>
        </div>
      </GlowCard>
    </a>
  );
};

export default PublicationCard;