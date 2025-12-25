
import https from 'https';

const urls = [
    "https://assets2.lottiefiles.com/packages/lf20_1idqu1ac.json",
    "https://assets5.lottiefiles.com/packages/lf20_5tl1xxnz.json",
    "https://assets3.lottiefiles.com/packages/lf20_ujw355u9.json"
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`URL: ${url} - Status: ${res.statusCode}`);
        res.on('data', () => { });
    }).on('error', (e) => {
        console.error(`URL: ${url} - Error: ${e.message}`);
    });
});
