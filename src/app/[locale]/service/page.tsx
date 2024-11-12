import React from 'react'
import { useTranslations } from 'next-intl';

export default function Service() {
    const t = useTranslations('AboutPage');
    
  return (
    <div>
      <h1 className='text-4xl mb-4 font-semibold'>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}
