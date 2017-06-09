import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import DeleteNew from "./DeleteNew"

class PostList  extends React.Component{
  constructor(){
    super();
    this.state={
      list:[],
      id:""
    }
  }
  componentWillMount(){
    let set = this
    axios.get("http://express-api.haoqicat.com/posts")//获取后提数据
    .then(function(response){
      console.log(response.data.posts)
      const lists = response.data.posts
      set.setState({list:[...response.data.posts]})
    })
    .catch(function(err){
      console.log(err)
    })
  }
   filterPosts(id) {
     const posts = this.state.list.filter((post) => post._id !== id )
     this.setState({ list: posts })
   }

   handleClick(value) {
     this.setState({id: value});
     this.refs.dialog.handleOpen();
     console.log(this.state.id)
   }
  render(){
    const ContentList = this.state.list.map((item)=>(
      <div className="postlist-list" >
        <div className="list-title">{item.title}</div>
        <div className="list-a">
          <Link to={`/post/${item._id}/shownew`}>查看</Link>
          <Link to={`/post/${item._id}/addnew`}>编辑</Link>
          <Link to="" onClick={this.handleClick.bind(this,item._id)}>删除</Link>
        </div>
      </div>
    ))
    return(
      <div>
        <Link to='/post/new' className="postlist-a">写文章</Link>
        {ContentList}
        <DeleteNew id={this.state.id} removePosts={this.filterPosts.bind(this)} ref='dialog'/>
      </div>
    )
  }
}
export default PostList
