import React from 'react';
import AnimatedCursor from 'react-animated-cursor';


export const AniamtedCursor = () => {
    return (
        <div>
            <AnimatedCursor
                innerSize={8}
                outerSize={8}
                color={[0, 0, 0]}
                outerAlpha={0.1}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
                ]}
            />
        </div>
    );
};
