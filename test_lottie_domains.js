
import https from 'https';

const urls = [
    "https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json", // Contact
    "https://assets3.lottiefiles.com/packages/lf20_sk5h1kfn.json", // Resources
    "https://assets5.lottiefiles.com/packages/lf20_5tl1xxnz.json", // Careers
    "https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json", // Candidate 1 (Growth)
    "https://assets2.lottiefiles.com/packages/lf20_qpwbjrxf.json"  // Candidate 2 (Original)
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`URL: ${url} - Status: ${res.statusCode}`);
        res.on('data', () => { });
    }).on('error', (e) => {
        console.error(`URL: ${url} - Error: ${e.message}`);
    });
});
