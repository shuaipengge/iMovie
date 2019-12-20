module.exports = {
    devServer: {
        proxy: {
            '/': {
                //开发接口
                // target: 'http://localhost:3000/',
                target: 'https://autumnfish.cn/',
                ws: false,
                changeOrigin: true,
                cookieDomainRewrite: {
                    '*': '127.0.0.1'
                },
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}
