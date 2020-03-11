import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import PostTitle from './PostTitle';
import Comment from './Comment';
import Footbar from './Footbar';

class App extends Component {
  state = {
    postDetails: {},
    loader: false
  };

  componentDidMount() {
    this.setState({loader: true});
    fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => response.json())
          .then(data => 
            this.setState({postDetails: data, loader: false,}))
  }
  render(){
  return (  
    <div>
      {this.state.loader ? "Ładowanie" : null}
      <Header 
        title = "Mój Blog"
      />
      <PostTitle 
        postTitle ={this.state.postDetails.title}
        post={this.state.postDetails.body}
      />
      <Comment 
        comment = "Komentarze: "
      />

      <Footbar 
        footer = "&copy; Copyright 2020"
      />
    </div>    
  )
}}

export default App;
