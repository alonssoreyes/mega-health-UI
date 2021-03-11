require('dotenv').config();

const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app){

    app.use(createProxyMiddleware('/api/', {
        target: process.env.REACT_APP_API_HOST || 'http://localhost:3001/',
        changeOrigin:true,
        secure:false
    }))
}