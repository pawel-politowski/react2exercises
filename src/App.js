import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PostTitle from './PostTitle';
import Comment from './Comment';
import Footbar from './Footbar';

class App extends Component {
  state = {
    postDetails: {},
    loader: false,
    errorCatch: false
  };

  componentDidMount() {
    this.setState({loader: true});
    this.setState({errorCatch: false})
    fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => response.json())
          .then(data => 
            this.setState({postDetails: data, loader: false,})) 
          .catch(error => {                                                  
              if (error) {
                  this.setState({errorCatch: true, loader: false})
              }})      
  }
  render(){
  return (  
    <div>     
      {this.state.errorCatch ? "Błąd pobierania danych!!!!" : null}
      {this.state.loader ? "Ładowanie" : null}      
      <Header 
        title = "Mój Blog"
      />
      <PostTitle 
        postTitle ={this.state.postDetails.title}
        post={this.state.postDetails.body}
      />
      <Comment />

      <Footbar 
        footer = "&copy; Copyright 2020"
      />
    </div>    
  )
}}

export default App;
