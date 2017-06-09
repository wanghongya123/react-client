import React, { Component } from 'react';
import './App.css';
import New from "./compontent/New.js"
import AddNew from "./compontent/AddNew.js"
import ShowNew from "./compontent/ShowNew.js"
import DeleteNew from "./compontent/DeleteNew.js"
import Header from "./compontent/Header.js"
import axios from "axios"
import PostList from './compontent/PostList'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
            <Route exact path="/" component={PostList} />
            <Route  path="/post/new" component={New} />
            <Route  path="/post/:id/addnew" component={AddNew} />
            <Route  path="/post/:id/shownew" component={ShowNew} />
            <Route  path="/post/:id/deletenew" component={DeleteNew} />
        </div>
      </Router>
    );
  }
}

export default App;
