import React from "react";

import { useTranslation } from 'react-i18next';

export function HardSkills() {

    const { t } = useTranslation('hard_skills');

    return(
        <div>
            <h2 className="text-4xl font-semibold text-left">{t('title')}</h2>
            <div className='pl-5 pt-4 border-l-4'>

              <div>
                <h2 className="text-2xl font-semibold text-left">{t('title_languges')}</h2>
                <div>
                  <p className='text-md text-justify'>{t('content_languages')}</p>
                </div>
              </div>

              <div className='mt-5'>
                <h2 className="text-2xl font-semibold text-left">{t('title_technologies')}</h2>
                <div>
                  <p className='text-md text-justify'>{t('content_technologies')}</p>
                </div>
              </div>
              
              <div className='mt-5'>
                <h2 className="text-2xl font-semibold text-left">{t('title_db')}</h2>
                <div>
                  <p className='text-md text-justify'>{t('content_db')}</p>
                </div>
              </div>

              <div className='mt-5'>
                <h2 className="text-2xl font-semibold text-left">{t('title_3D')}</h2>
                <div>
                  <p className='text-md text-justify'>{t('content_3D')}</p>
                </div>
              </div>

            </div>
        </div>
    )
}