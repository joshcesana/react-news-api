import React, { Component } from 'react';

class CardImage extends Component {
  state = {
    favorite_icon: "favorite_border"
  }

  componentWillMount() {
    if (this.props.article.isSaved) {
      this.makeHeartDark();
    }
  }

  handleOnClick = () => {
    this.props.addSave(this.props.article);
    this.makeHeartDark();
  }

  makeHeartDark = () => {
    this.setState({
      favorite_icon: "favorite" // changes favorite icon from outline to solid
    })
  }

  render() {
    return (
      <div className="card-image">
        <a href={this.props.article.url} target="_blank"><img src={this.props.article.urlToImage} alt="" /></a>
        <a className="btn-floating halfway-fab waves-effect waves-light white">
          <i className="material-icons md-dark" onClick={this.handleOnClick}>{this.state.favorite_icon}</i>
        </a>
      </div>
    )
  }
}

export default CardImage;
