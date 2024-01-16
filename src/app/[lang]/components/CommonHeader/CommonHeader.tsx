"use client"

import React, { useEffect, useState } from 'react';
import { getDictionary } from '../../../../../getDictionaries';
import { useLanguage } from '../../context/LanguageContext';
import { CommonProps, i18nHeader } from '@/type';
import Image from 'next/image';
import Link from 'next/link';

const CommonHeader: React.FC<CommonProps> = (locale) => {
  const lang = getDictionary(locale.locale);
  const [openMenu, setOpenMenu] = useState(false)
  const [data, setData] = useState<i18nHeader>()
  useEffect(() => {
    const fetchData = async () => {
      const lang = await getDictionary(locale.locale);
      setData(lang.header);
    };

    fetchData();
  }, [locale.locale]);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [openMenu]);


  return (
    <header className={`w-full ${openMenu ? 'h-screen' : 'h-auto'} bg-navy`}>
      <div className="lg:max-w-[1120px] mx-auto flex justify-between items-center py-4 sm:px-4">
        <h1 className="text-white font-hd-en text-header3-mobile font-semibold">{data?.logo}</h1>
      </div>
        {/* <nav className='sm:hidden'>
          <ul className="flex space-x-10">
            <Link href={'/'}>
              <li className="text-brand font-bd-en text-body-bold cursor-pointer px-2">
                {data?.button.Home}
              </li>
            </Link>
            <Link target={'_blank'} href={'mailto:contact@ctvg.com'}>
              <li className="text-white07 font-bd-en text-body cursor-pointer px-2 hover:text-brand">
                {data?.button.ContactUs}
              </li>
            </Link>
          </ul>
        </nav>
        <div className='lg:hidden cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
          {
            openMenu ? (<Image src={'./svg/close.svg'} width={24} height={24} alt={'close'}/>):(<Image src={'./svg/collapsed.svg'} width={24} height={24} alt={'collapsed'}/>)
          }
        </div>
      </div>
      {openMenu && (
        <div className="w-full h-full bg-navy pt-4">
          <ul className="flex flex-col justify-center items-center">
            <Link href={'/'}>
              <li className="text-brand py-3 font-bd-en text-body-bold cursor-pointer">
                {data?.button.Home}
              </li>
            </Link>
            <Link target={'_blank'} href={'mailto:contact@ctvg.com'}>
              <li className="text-white07 py-3 font-bd-en text-body cursor-pointer hover:text-brand">
                  {data?.button.ContactUs}
              </li>
            </Link>
          </ul>
        </div>
      )} */}
    </header>
  );
};

export default CommonHeader;
