function cors(req, res, next) {
    const { origin } = req.headers;
    if(allowedCors.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }

    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    next();
}

const allowedCors = [
    "http://localhost:3001",
    "http://localhost:3000",
    "https://practicum.yandex.ru",
    "https://students-projects.ru",
    "https://gokolsin-pindie-frontend.nomoredomainswork.ru",
    "https://gokolsin-pindie-backend.nomoredomainswork.ru",
    "https://158.160.164.221"
]

module.exports = { cors }