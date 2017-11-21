//cmd
var str=require('./app');
document.body.innerHTML='<div>'+str+'</div>';
//加载CSS模块
//style css不能互换，webpack从右开始识别，当前版本webpack不能省略-loader
require('./css/app');

//amd
//define(["./app.js"],function(str){
//  document.body.innerHTML='<div>'+str+'</div>';
//})
