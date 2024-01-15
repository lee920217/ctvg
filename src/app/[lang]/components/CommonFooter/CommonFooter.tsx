import { CommonProps } from "@/type";
import React from "react";
import { getDictionary } from "../../../../../getDictionaries";
import Link from "next/link";
import Image from "next/image";

const CommonFooter: React.FC<CommonProps> = async(locale) => {
    const lang = await getDictionary(locale.locale);
    const data = lang.footer
    return (
        <div className="w-full bg-navy flex lg:py-[72px] sm:py-16">
            <div className="lg:w-[1120px] lg:mx-auto flex flex-col sm:w-full sm:px-4">
                <p className="text-white text-header3-mobile font-semibold font-bd-en">{data.logo}</p>
                <p className="text-white07 font-bd-en text-left my-6 max-w-[552px]">{data.intro}</p>
                <button className='lg:w-44 lg:h-14 bg-brand text-navy rounded-sm font-hd-en text-button sm:w-[343px] sm:h-[56px]'>{data.button}</button>
                <div className=" h-[1px] mt-12 mb-4 bg-white03 w-full"></div>
                <div className="flex justify-between sm:flex-col">
                    <div className="flex justify-between gap-10 text-white07 sm:flex-col sm:gap-4">
                        <Link href={'/'} className="font-bd-en text-label">© 2024 CTVG. All rights reserved.</Link>
                        <Link href={'/'} className="font-bd-en text-label">Privacy Policy</Link>
                        <Link href={'/'} className="font-bd-en text-label">Terms of Services</Link>
                    </div>
                    <div className="flex justify-between gap-6 text-white07 sm:justify-start sm:mt-6">
                        <Link href={'/'}><Image alt={'twitter'} src={'./svg/twitter.svg'} width={24} height={24} /></Link>
                        <Link href={'/'}><Image alt={'github'} src={'./svg/github.svg'} width={24} height={24} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonFooter