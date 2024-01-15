import React from 'react';
import { CommonProps } from '@/type';
import { getDictionary } from '../../../../../../getDictionaries';
import Image from 'next/image';

const Mission: React.FC<CommonProps> = async(locale) => {
  const lang = await getDictionary(locale.locale);
  const data = lang.misson

  return (
    <div className='w-full bg-white lg:py-40 flex flex-col justify-center items-center sm:py-20'>
      <div className='w-full max-w-[1120px] sm:px-4'>
        <div className='w-full flex justify-between items-center sm:flex-col'>
          <p className='lg:w-[498px] font-hd-en text-nacy text-header2-desktop sm:text-header2-mobile'>{data.header}</p>
          <p className='lg:w-[520px] font-bd-en text-navy07 text-body sm:pt-6'>{data.headerIntro}</p>
        </div>
        <div className='w-full flex justify-between mt-16 gap-8 sm:flex-col sm:justify-center sm:items-center sm:mt-8'>
          <div className='flex flex-col justify-center items-center w-[363px] h-[204px]'>
            <Image alt='enhance' src='./svg/enhance.svg' width={72} height={72}/>
            <p className=' text-navy text-subheader-bold mt-8 mb-4'>{data.enhanceHeader}</p>
            <p className=' text-navy07 text-body text-center w-[331px]'>{data.enhanceText}</p>
          </div>
          <div className='flex flex-col justify-center items-center w-[363px] h-[204px]'>
            <Image alt='enhance' src='./svg/cost.svg' width={72} height={72}/>
            <p className=' text-navy text-subheader-bold mt-8 mb-4'>{data.CostHeader}</p>
            <p className=' text-navy07 text-body text-center w-[331px]'>{data.CostText}</p>
          </div>
          <div className='flex flex-col justify-center items-center w-[363px] h-[204px]'>
            <Image alt='enhance' src='./svg/competitive.svg' width={72} height={72}/>
            <p className=' text-navy text-subheader-bold mt-8 mb-4'>{data.CompetitiveHeader}</p>
            <p className=' text-navy07 text-body text-center w-[331px]'>{data.CompetitiveText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission;
