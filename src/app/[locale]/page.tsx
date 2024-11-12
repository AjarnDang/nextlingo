import { useTranslations } from 'next-intl';
import DabuzzzText from '@/components/DabuzzzText';
import { Button } from 'flowbite-react';

export default function Home() {
  const t = useTranslations('IndexPage');

  return (
    <div className='relative min-h-[80vh]'>
      <div className='absolute-box text-center'>
        <h1 className='text-2xl font-semibold'>{t('title')}</h1>
        <h1 className='text-[160px] leading-[12rem] text-primary'><DabuzzzText /></h1>
        <Button className="rounded-full bg-primary px-3"></Button>
      </div>
    </div>
  );
}
