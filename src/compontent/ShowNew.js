import React from "react"
import axios from "axios"
import From from "./From.js"
import { Link } from 'react-router-dom'

  class ShowNew extends React.Component{
    constructor(){
      super();
      this.state={
        post:{}
      }
    }
    componentWillMount(data){
      axios.get(`http://express-api.haoqicat.com/post/${this.props.match.params.id}`,data)//获取后提数据
      .then(res =>{
        this.setState({
          post:res.data.post
        })
        console.log(this.state.post.content)
        console.log(this.state.post.title)
        console.log(this.state.post.category)
      })
      .catch(function(err){
        console.log(err)
      })

    }
    render(){
      return (
        <div className="showNew">
            <div className="show-box">
              <div className="show-cag">{this.state.post.category}</div>
              <div className="show-title">{this.state.post.title}</div>
              <div className="show-con">{this.state.post.content}</div>
            </div>
        </div>
      );
    }
}
export default ShowNew
