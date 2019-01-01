import React, { Component } from 'react';

class SearchForm extends Component {

  state = {
    search: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({
      search: ''
    })
    this.props.fetchSearch(this.state.search);
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={ (event) => this.handleOnSubmit(event) }>
          <div className="row search-row">
            <div className="input-field col s6 push-s3 l4 push-l4">
              <input id="search"
                     name="search"
                     value={this.state.search}
                     placeholder="Search"
                     type="text"
                     className="validate"
                     onChange={this.handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchForm;
