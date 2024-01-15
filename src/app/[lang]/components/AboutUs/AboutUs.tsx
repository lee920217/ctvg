import { CommonProps } from '@/type';
import React from 'react';
import Image from 'next/image';
import { getDictionary } from '../../../../../getDictionaries';

const AboutUs: React.FC<CommonProps> = async(locale) => {
  const lang = await getDictionary(locale.locale);
  const data = lang.aboutUs
  return (
    <div className="w-full bg-white lg:py-40 flex justify-center items-center sm:py-20 sm:px-4">
      <div className="w-full mx-auto max-w-[1120px] flex items-center justify-between sm:flex-col sm:gap-8">
        <div className='flex flex-col lg:max-w-[583px]'>
            <p className="font-bd-en text-brand-darker text-body-bold sm:text-center">{data.subHeader}</p>
            <p className="font-hd-en text-navy text-header2-desktop mt-4 sm:text-header2-mobile sm:text-center">{data.header}</p>
            <p className='font-bd-en text-navy07 text-body mt-16 sm:text-body sm:mt-8'>{data.intro1}</p>
            <p className='font-bd-en text-navy07 text-body mt-6 sm:text-body'>{data.intro2}</p>
        </div>
        <div className='lg:w-[457px] lg:h-[434px] relative sm:w-[343px] sm:h-[249px]'>
          <Image
            alt='home-slogan-svg'
            layout='fill'
            objectFit='contain'
            src='/svg/aboutus.svg'
           />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
