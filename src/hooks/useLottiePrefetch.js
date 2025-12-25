import { useEffect } from 'react';

const urls = [
    "https://assets3.lottiefiles.com/packages/lf20_sk5h1kfn.json", // Resources
    "https://assets2.lottiefiles.com/packages/lf20_t9gkkhz4.json", // Investors
    "https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json", // Contact
    "https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json", // CaseStudies
    "https://assets5.lottiefiles.com/packages/lf20_5tl1xxnz.json"  // Careers
];

const useLottiePrefetch = () => {
    useEffect(() => {
        const prefetch = () => {
            urls.forEach(url => {
                fetch(url, { priority: 'low' }) // Attempt to prefetch with low priority
                    .then(res => res.json()) // Parse JSON to ensure full download
                    .catch(() => { }); // Ignore errors, this is just for caching
            });
            window.removeEventListener('scroll', prefetch);
        };

        window.addEventListener('scroll', prefetch, { once: true });

        return () => window.removeEventListener('scroll', prefetch);
    }, []);
};

export default useLottiePrefetch;
