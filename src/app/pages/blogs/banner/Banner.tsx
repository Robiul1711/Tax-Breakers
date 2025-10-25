import React from 'react';
import CommonBannerThree from '@/common/CommonBannerThree';
import Image from 'next/image';
import featureImage from '@/assets/images/Featured Image.png'


const Banner = () => {
    return (
        <div className='relative'>
           <CommonBannerThree title='Blog' main_title='Check out anything that might help you out here!' description='Get the latest information about the world of business, customers, and others here.'/>
           <div className='absolute -bottom-1/2 left-[41.5%] -translate-x-1/3 w-full lg:block hidden '>
            <Image className='lg:w-[850px] xl:w-[1050px] 2xl:w-[1575px] lg:h-auto' src={featureImage} height={1024} width={1320} alt='feature image'></Image>
           </div>
        </div>
    );
};

export default Banner;