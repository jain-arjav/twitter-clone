import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import { RiNotification2Line } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import FeedCard from '@/components/FeedCard';


// twitter sidebar button
interface SidebarButton {
  title: string;
  icon: React.ReactNode;
}
const sidebarButtons: SidebarButton[] = [
  {
    title: 'Home',
    icon: <GoHome />
  },
  {
    title: 'Explore',
    icon: <BiSearch />,
  },
  {
    title: 'Notifications',
    icon: <RiNotification2Line />,
  },
  {
    title: 'Messages',
    icon: <FiMail />
    ,
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />,
  },
  {
    title: 'Profile',
    icon: <BiUser />,

  },

]
export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-12 h-screen w-screen px-20'>
        <div className='col-span-3 justify-start'>
          <div className='text-4xl h-fit w-fit hover:bg-slate-800 rounded-full  p-2 cursor-pointer transition-all'>
            <FaTwitter />
          </div>

          <div className='mt-4 text-2xl pr-4'>
            <ul>
              <div>
                {sidebarButtons.map(item =>
                  <li className='flex justify-start items-center gap-5  hover:bg-slate-800 rounded-full p-4 cursor-pointer transition-all' key={item.title}>
                    <span>
                      {item.icon}
                    </span>
                    <span>
                      {item.title}
                    </span>
                  </li>
                )
                }
              </div>
            </ul>
            <div className='mt-5 mx-3 pr-3'>
              <button className='text-lg font-semibold bg-[#359BF0] p-4 rounded-full w-full mr-5'>
                Post
              </button>
            </div>

          </div>

        </div>

        <div className='col-span-6 border-r-[1px] border-l-[1px] border-gray-400'>
          <FeedCard />
        </div>
        <div className='col-span-3'></div>

      </div>
    </div>
  )
}
