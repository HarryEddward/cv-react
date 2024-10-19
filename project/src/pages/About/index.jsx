import React from 'react';
import { AboutView } from '../../views/About';
import { BlurScaleAnimation } from '../../components/transitions/BlurScaleAnimation';

export const AboutPage = () => {
    return (
        <div>
            <BlurScaleAnimation>
                <AboutView/>
            </BlurScaleAnimation>
        </div>
    );
};
