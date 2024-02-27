import React from 'react'
import Image from 'next/image'
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
    return (
        <div className='border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer'>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-1'>
                    <Image src='https://avatars.githubusercontent.com/u/74862432?v=4' alt='profile' height={50} width={50} />
                </div>
                <div className='col-span-11'>
                    <h5>Arjav Jain</h5>
                    <p>When the poor can’t repay their loans to banks, their homes are sold.
                        When the rich can’t repay their loans to banks, the banks are sold.
                        #irony
                    </p>
                    <div className='flex justify-between mt-5 text-xl items-center p-2 pb-0 w-[90%]'>
                        <div>
                            <BiMessageRounded />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <AiOutlineHeart />
                        </div>
                        <div>
                            <BiUpload />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
};
export default FeedCard