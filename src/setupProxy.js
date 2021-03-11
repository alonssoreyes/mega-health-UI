require('dotenv').config();

const {createProxyMiddleware} = require('http-proxy-middleware');
const PORT = process.env.PORT;
module.exports = function(app){

    app.use(createProxyMiddleware('/api/', {
        target: `${process.env.REACT_APP_API_HOST}:${PORT}` || 'http://localhost:3001/',
        changeOrigin:true,
        secure:false
    }));

    console.log(PORT);
}