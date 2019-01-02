import React, { Component } from 'react';

class ArticleImage extends Component {
  state = {
    favorite_icon: "favorite_border"
  }

  componentWillMount() {
    if (this.props.article.isSaved) {
      this.makeHeartDark();
    }
  }

  handleOnClick = () => {
    debugger;
    this.props.addSave(this.props.article);
    this.makeHeartDark();
  }

  makeHeartDark = () => {
    this.setState({
      favorite_icon: "favorite" // changes favorite icon from outline to solid
    })
  }

  render() {
    const image = (this.props.article.urlToImage) ? this.props.article.urlToImage : "http://whatsupnewp.com/wp-content/uploads/2016/06/maxresdefault-768x432.jpg"
    return (
      <div className="card-image">
        <a href={this.props.article.url} target="_blank"><img src={image} alt="" /></a>
        <a className="btn-floating halfway-fab waves-effect waves-light white">
          <i className="material-icons md-dark" onClick={this.handleOnClick}>{this.state.favorite_icon}</i>
        </a>
      </div>
    )
  }
}

export default ArticleImage;