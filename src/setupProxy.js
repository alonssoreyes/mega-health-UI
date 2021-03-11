require('dotenv').config();

const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app){
    app.use('/api', createProxyMiddleware({
        target: process.env.REACT_APP_API_HOST || 'http://localhost:3001/',
        changeOrigin:true
    }))
}