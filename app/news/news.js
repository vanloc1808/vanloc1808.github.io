import { newsData } from "@/utils/data/news-data";
import Image from "next/image";
import { BsNewspaper } from "react-icons/bs";
import GlowCard from "../components/helper/glow-card";

function News() {
  return (
    <div id="news" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            ALL NEWS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <div className="flex flex-col gap-6">
              {newsData.map((newsItem, index) => (
                <GlowCard key={index} identifier={`news-${index}`}>
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsNewspaper size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {newsItem.title}
                        </p>
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          Date: {newsItem.date}
                        </p>
                        <p className="text-sm sm:text-base">
                          {newsItem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;