import { useTranslations } from 'next-intl';
import DabuzzzText from '@/components/DabuzzzText';
import { Button } from 'flowbite-react';

export default function Home() {
  const t = useTranslations('IndexPage');

  return (
    <div className='relative min-h-[86vh]'>
      <div className='absolute-box text-center'>
        <h1 className='text-2xl font-semibold'>{t('title')}</h1>
        <h1 className='lg:text-[10rem] text-[5rem] lg:leading-[12rem] text-primary'><DabuzzzText /></h1>
        <div className='w-full flex justify-center mt-4'>
            <Button className="rounded-full bg-primary px-4">{t('book')}</Button>
        </div>
      </div>
    </div>
  );
}
