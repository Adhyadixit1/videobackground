import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const DotLottieVisual = ({ src, className = "w-full h-full" }) => {
    return (
        <div className={className}>
            <DotLottieReact
                src={src}
                loop
                autoplay
                className="w-full h-full object-contain"
            />
        </div>
    );
};

export default DotLottieVisual;
