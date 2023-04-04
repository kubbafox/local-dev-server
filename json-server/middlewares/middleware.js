const RequestPathsEnum = {
    return200: '200', return400: '400', return500: '500'
};

// consts
const SIMULATED_LATENCY = 2000;

module.exports = (req, res, next) => {
    console.log('Mock Server gets request for URL..', req.url);
    console.log('Mock Server gets request for payload..', req.body);
    const reqUrl = req.url.replace('/', '');
    setTimeout(() => {
        if (reqUrl.includes(RequestPathsEnum.return200)) {
            res.status(200).json({
                message: 'OK',
            });
            console.log('returning 200', res.status, res.message);
            return;
        }
        if (reqUrl.includes(RequestPathsEnum.return400)) {
            res.status(400).json({
                error: 'client side error',
            });
            console.log('returning 400', res.status, res.message);
            return;
        }
        if (reqUrl.includes(RequestPathsEnum.return500)) {
            res.status(500).json({
                error: 'server side error',
            });
            console.log('returning 500', res.status, res.message);
            return;
        }
    }, SIMULATED_LATENCY);
};
