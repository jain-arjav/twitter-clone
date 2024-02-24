import React from 'react'
import Image from 'next/image'
const FeedCard: React.FC = () => {
    return (
        <div className='border'>
            <div className='grid grid-cols-12 '>
                <div className='col-span-4'>
                    <Image src='https://avatars.githubusercontent.com/u/74862432?v=4' alt='profile' height={50} width={50} />
                </div>
                <div className='col-span-8'></div>

            </div>
        </div>
    )
};
export default FeedCard