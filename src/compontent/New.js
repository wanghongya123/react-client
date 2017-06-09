import React from "react"
import axios from "axios"
import From from "./From.js"
import { Link } from 'react-router-dom'


  const New =(props)=>{
    const publishPost =(data)=>{
    axios.post("http://express-api.haoqicat.com/post",data)
    .then(res => {
      console.log(res.data.message)
      props.history.push('/')
    })
    axios.get("http://express-api.haoqicat.com/posts")//获取后提数据
    .then(function(response){
      console.log(response.data.posts)
    })
    .catch(function(err){
      console.log(err)
    })
  }
    return (
      <div className="New">
          <h1 className="h1">文章</h1>
           <From publishPost={publishPost} label='发布文章' />
      </div>
    );
}
export default New
