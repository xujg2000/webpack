let React=require("react");
let ReactDOM=require("react-dom");
console.log(React,ReactDOM)
//let Hello=React.createClass({
//  render:function(){
//      return <h1>hello</h1>
//  }
//})
var div1=document.createElement("div");
document.body.appendChild(div1);
ReactDOM.render(<h1>hello</h1>,div1)