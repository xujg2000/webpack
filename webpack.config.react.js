var htmlWebpackPlugin=require('html-webpack-plugin');
var path=require('path');
module.exports={
    entry:__dirname+"/react/index.js",
    output:{
        path:__dirname+'/react_build/',//webpack2.0,建议用__dirname表示当前根目录;
        filename:"build.js",
    },
    module:{
        loaders:[
            {
                test:/.css$/,
                loaders:["style-loader","css-loader"],
                exclude:'/node_modules/',
            },
            {
                test:/.jsx?$/,
                loaders:[ 'babel-loader'],
                exclude:'/node_modules/',
                include:path.resolve(__dirname,'react'),//之查找es6文件家下面的JS文件
            }
        ]
    },
    devServer:{
      hot:true,
      inline:true,
    },
    resolve:{
        extensions:['.js','.css','.jsx']//自动补全后缀
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"webpack plugin",
        })
    ]
}
