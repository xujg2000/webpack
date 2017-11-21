var htmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:__dirname+"/app/index.js",
    output:{
        path:__dirname+'/build/',//webpack2.0,建议用__dirname表示当前根目录;
        filename:"build.js",
    },
    module:{
        loaders:[
            {
                test:/.css$/,
                loaders:["style-loader","css-loader"],
                exclude:'/node_modules/',
            }
        ]
    },
    devServer:{
      hot:true,
      inline:true,
    },
    resolve:{
        extensions:['.js','.css']//自动补全后缀
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"webpack plugin",
        })
    ]
}
