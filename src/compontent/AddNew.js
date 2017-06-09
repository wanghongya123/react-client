import React from "react"
import axios from "axios"
import From from "./From.js"
import { Link } from 'react-router-dom'

class AddNew extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      post:{}
    }
  }
  componentWillMount(data){
    axios.get(`http://express-api.haoqicat.com/post/${this.props.match.params.id}`,data)//获取后提数据
    .then(res =>{
      this.setState({
        post:res.data.post
      })
    })
    .catch(function(err){
      console.log(err)
    })

  }
   publishPost(data,props){
    axios.put(`http://express-api.haoqicat.com/post/${this.props.match.params.id}`,data)
    .then(res => {
      console.log(res.data.message)
      this.props.history.push('/')
    })
  }
  render(){
    return (
      <div className="New">
          <h1 className="h1">文章</h1>
          {
       Object.keys(this.state.post).length !== 0 ? <From label='更新文章' publishPost={this.publishPost.bind(this)} post={this.state.post} /> : ''
       }
      </div>
    )
  }
}
export default AddNew
