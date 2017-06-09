import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

//componentWillMount(){
  // axios.post("http://192.168.1.102:5000/post",{title:"why-haha",content:"why-hehe",category:"why-xixi"}).then(
  //      console.log("re...........")//后台传数据
  //   )
  // axios.get("http://192.168.1.102:5000/posts")//获取后提数据
  // .then(function(response){
  //   console.log(response.data.posts)
  // })
  // .catch(function(err){
  //   console.log(err)
  // })
  // //////////////////////////////////
  // axios.get("http://192.168.1.102:5000/post/593605812cf2f60539a17684")//获取后台一篇数据
  // .then(function(response){
  //   console.log(response)
  // })
  // .catch(function(err){
  //   console.log(err)
  // })
//}
