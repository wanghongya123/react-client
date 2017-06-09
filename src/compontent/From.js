import React from "react"
import axios from "axios"

import { Link } from 'react-router-dom'


class From extends React.Component{
  handleSubmit = (e) => {
      e.preventDefault()
      const category = this.category.value;
      const title = this.title.value;
      const content = this.content.value;
      console.log(title)
      this.props.publishPost({category, title, content});
    }
  render() {
    return (
      <div className="from">
          <form className="from" onSubmit={this.handleSubmit.bind(this)}>
            <div className="box1">
              <lable>分类:</lable>
              <input
                defaultValue={this.props.post ? this.props.post.category : ''}
             ref={(input) => this.category = input}  />
            </div>
            <div className="box2">
              <lable>标题:</lable>
              <input
                defaultValue={this.props.post ? this.props.post.title : ''}
             ref={(input) => this.title = input} />
            </div>
            <div className="box3">
              <lable>内容:</lable>
              <textarea  defaultValue={this.props.post ? this.props.post.content : ''}
             ref={(input) => this.content = input}  rows="20" />
            </div>
            <div className="box4">
            <button type="submit" key="2">{this.props.label}</button>
              <a href="/" className="new-a">取消</a>
            </div>
          </form>
      </div>
    )
  }
}
export default From
