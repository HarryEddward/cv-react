import React from "react";
import { useTranslation } from 'react-i18next';

export function Softkills() {

    const { t } = useTranslation('soft_skills');

    return(
        <div>
            <h2 className="text-4xl font-semibold text-left">{t('title')}</h2>
            <div className='pl-5 pt-4 border-l-4'>
              <h2 className="text-2xl font-semibold text-left">{t('title_sales')}</h2>
              <div>
                <p className='text-md text-justify'>
                {t('content_sales')}
                </p>
              </div>

              <div className='mt-5'>
                <h2 className="text-2xl font-semibold text-left">{t('title_social')}</h2>
                <div>
                  <p className='text-md text-justify'>{t('content_social')}</p>
                </div>
              </div>

              <div className='mt-5'>
                <h2 className="text-2xl font-semibold text-left">{t('title_communities')}</h2>
                <div>
                  <p className='text-md text-justify'>
                    {t('content_communities')}
                  </p>
                </div>
              </div>
            </div>
        </div>
    )
}