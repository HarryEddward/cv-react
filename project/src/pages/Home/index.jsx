import React from 'react';
import { HomeView } from '../../views/Home';
import { BlurScaleAnimation } from '../../components/transitions/BlurScaleAnimation';

export const HomePage = () => {
    return (
        <div>
            <BlurScaleAnimation>
                <HomeView/>
            </BlurScaleAnimation>
        </div>
    );
};
