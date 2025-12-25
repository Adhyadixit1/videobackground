import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const LottieVisual = ({ url }) => {
    const [animationData, setAnimationData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setAnimationData(null);
        setError(false);
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Failed to load');
                return res.json();
            })
            .then(data => setAnimationData(data))
            .catch(err => {
                console.error("Lottie Load Error:", err);
                setError(true);
            });
    }, [url]);

    if (error) {
        return (
            <div className="flex items-center justify-center w-full h-full text-[#D3FD50]/50 text-sm font-[font1]">
                Animation unavailable
            </div>
        );
    }

    return (
        <div className={`w-full h-full transition-opacity duration-700 ${animationData ? 'opacity-100' : 'opacity-0'}`}>
            {animationData && <Lottie animationData={animationData} loop={true} className="w-full h-full object-contain" />}
        </div>
    );
};

export default LottieVisual;
