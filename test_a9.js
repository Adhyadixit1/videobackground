
import https from 'https';
const url = "https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json";
https.get(url, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
});
