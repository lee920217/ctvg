import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import { getDictionary } from '../../../getDictionaries'
import { i18nParams } from '@/type';
import CommonHeader from './components/CommonHeader/CommonHeader';
import HomeSlogan from './components/HomeSlogan/HomeSlogan';
import Mission from './components/Mission/Mission/Mission';
import Service from './components/Service/Service';
import AboutUs from './components/AboutUs/AboutUs';
import CommonFooter from './components/CommonFooter/CommonFooter';

export default function Home({params}: {params: i18nParams}) {
  return (
    <main className="flex min-h-screen flex-col ">
      <CommonHeader locale={params.lang}/>
      <HomeSlogan locale={params.lang}/>
      <Mission locale={params.lang}/>
      <Service locale={params.lang} />
      <AboutUs locale={params.lang} />
      <CommonFooter locale={params.lang}/>
    </main>
  )
}
