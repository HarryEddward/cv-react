import React from 'react';
import { ContactView } from '../../views/Contact';
import { BlurScaleAnimation } from '../../components/transitions/BlurScaleAnimation';

export const ContactPage = () => {
    return (
        <div>
            <BlurScaleAnimation>
                <ContactView/>
            </BlurScaleAnimation>
        </div>
    );
};
