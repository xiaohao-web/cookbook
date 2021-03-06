module.exports={
    devServer: {
        proxy: {
            '/recipe': {                //这里最好有一个 /
                target: 'https://api.jisuapi.com',         // 服务器端接口地址
                ws: true,            //如果要代理 websockets，配置这个参数
                      // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/recipe': '/recipe'
                }
                
            }
        }

    }
}