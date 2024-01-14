import { CommonProps } from '@/type'
import React from 'react'
import { getDictionary } from '../../../../../getDictionaries';
import Image from 'next/image';

const Service: React.FC<CommonProps> = async(locale) => {

  const lang = await getDictionary(locale.locale);
  const data = lang.service
  
  return (
    <div className='w-full lg:bg-service-svg sm:bg-navy bg-cover bg-no-repeat lg:h-[1578px] flex justify-center items-center sm:bg-center sm:py-20'>
        <div className='w-full max-w-[1180px] h-full flex overflow-hidden'>
            <div className='h-full flex flex-col gap-8 flex-wrap sm:items-center justify-center sm:px-4'>
                <p className='text-white w-[256px] text-header2-desktop font-bd-en mt-11 mb-5 sm:text-header2-mobile sm:text-center'>{data.header}</p>
                <Image className='sm:hidden' alt='service-image' src='./svg/service-intro.svg' width={363} height={616} />
                <div className='lg:w-[363px] lg:h-[398px] flex flex-col bg-white rounded-2xl p-8 sm:h-[346px]'>
                    <Image alt={'ui'} src='./svg/ui.svg' className='bg-brand p-3 rounded-md' width={56} height={56} />
                    <p className=' text-navy text-body-bold my-4 font-bd-en'>{data.UI}</p>
                    <p className=' text-navy07 text-body font-bd-en'>{data.UIIntro}</p>
                </div>
                <div className='lg:w-[363px] lg:h-[398px] flex flex-col bg-white rounded-2xl p-8 sm:h-[346px]'>
                    <Image alt={'ecosystem'} src='./svg/ecosystem.svg' className='bg-brand p-3 rounded-md' width={56} height={56} />
                    <p className='text-navy text-body-bold my-4 font-bd-en'>{data.Ecosystem}</p>
                    <p className='text-navy07 text-body font-bd-en'>{data.EcosystemIntro}</p>
                </div>
                <div className='lg:w-[363px] lg:h-[398px] flex flex-col bg-white rounded-2xl p-8 sm:h-[346px]'>
                    <Image alt={'development'} src='./svg/development.svg' className='bg-brand p-3 rounded-md' width={56} height={56} />
                    <p className='text-navy text-body-bold my-4 font-bd-en'>{data.Development}</p>
                    <p className='text-navy07 text-body font-bd-en'>{data.DevelopmentIntro}</p>
                </div>
                <div className='lg:w-[363px] lg:h-[398px] flex flex-col bg-white rounded-2xl p-8 sm:h-[346px]'>
                    <Image alt={'testing'} src='./svg/testing.svg' className='bg-brand p-3 rounded-md' width={56} height={56} />
                    <p className='text-navy text-body-bold my-4 font-bd-en'>{data.Testing}</p>
                    <p className='text-navy07 text-body font-bd-en'>{data.TestingIntro}</p>
                </div>
                <div className='lg:w-[363px] lg:h-[398px] flex flex-col bg-white rounded-2xl p-8 sm:h-[346px]'>
                    <Image alt={'operations'} src='./svg/operation.svg' className='bg-brand p-3 rounded-md' width={56} height={56} />
                    <p className='text-navy text-body-bold my-4 font-bd-en'>{data.Operations}</p>
                    <p className='text-navy07 text-body font-bd-en'>{data.OperationsIntro}</p>
                </div>
                <div className='lg:w-[363px] lg:h-[398px] flex flex-col bg-white rounded-2xl p-8 sm:h-[346px]'>
                    <Image alt={'community'} src='./svg/community.svg' className='bg-brand p-3 rounded-md' width={56} height={56} />
                    <p className='text-navy text-body-bold my-4 font-bd-en'>{data.Community}</p>
                    <p className='text-navy07 text-body font-bd-en'>{data.CommunityIntro}</p>
                </div>
                <div className='lg:w-[363px] lg:h-[398px] flex flex-col bg-white rounded-2xl p-8 sm:h-[346px]'>
                    <Image alt={'technical'} src='./svg/community.svg' className='bg-brand p-3 rounded-md' width={56} height={56} />
                    <p className='text-navy text-body-bold my-4 font-bd-en'>{data.Technical}</p>
                    <p className='text-navy07 text-body font-bd-en'>{data.TechnicalIntro}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Service