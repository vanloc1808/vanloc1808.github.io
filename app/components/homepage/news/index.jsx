// @flow strict

import { newsData } from "@/utils/data/news-data";
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

function NewsSection() {
  return (
    <div id="news" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          NEWS
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <div>
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Latest News
          </p>
          <ul className="text-gray-200 text-sm lg:text-lg">
            {newsData.slice(0, 5).map((newsItem, index) => (
              <li key={index} className="mb-4">
                <span className="block text-[#16f2b3]">{newsItem.date}</span>
                <strong>{newsItem.title}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/news"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default NewsSection;