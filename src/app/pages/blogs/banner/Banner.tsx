import React from 'react';
import CommonBannerThree from '@/common/CommonBannerThree';
import Image from 'next/image';
import featureImage from '@/assets/images/Featured Image.png'


const Banner = () => {
    return (
        <div className='relative'>
           <CommonBannerThree title='Blog' main_title='Check out anything that might help you out here!' description='Get the latest information about the world of business, customers, and others here.'/>
           <div className='absolute -bottom-1/2 left-1/2 -translate-x-1/3 w-full'>
            <Image src={featureImage} height={1024} width={1320} alt='feature image'></Image>
           </div>
        </div>
    );
};

export default Banner;