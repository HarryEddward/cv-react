import React from 'react';
import { Error404View } from '../../../views/Error/Error404';
import { BlurScaleAnimation } from '../../../components/transitions/BlurScaleAnimation';

export const Error404Page = () => {
    return (
        <div>
            <BlurScaleAnimation>
                <Error404View/>
            </BlurScaleAnimation>
        </div>
    );
};
