import React, { Component } from 'react';

class Comment extends Component{
    state = {
        valueName: '',
        valueComment: '',
        comments: [],
      }
      handleChangeName = (event) => {
        this.setState({valueName: event.target.value});
      }
      handleChangeComment = (event) => {
        this.setState({valueComment: event.target.value});
      }
      handleSubmit = (event) => {
        this.setState({
          comments: [...this.state.comments, {
            name: this.state.valueName,
            comment: this.state.valueComment,
          }],
          valueName: '',
          valueComment: '',
        });
        event.preventDefault();
      }
      renderComments = () => this.state.comments.map(
        (comment) => <div key={comment.name}>
          <h3>{comment.name}</h3>
          <div>{comment.comment}</div>
        </div>
      );
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.valueName} onChange={this.handleChangeName} />
              </label>
              <label>
                Name:
                <input type="text" value={this.state.valueComment} onChange={this.handleChangeComment} />
              </label>
              <input type="submit" value="Submit" />
            </form>
            {this.renderComments()}
          </div>
        );
      }
    }

export default Comment;