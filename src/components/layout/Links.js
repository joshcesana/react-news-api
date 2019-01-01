import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const Links = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to='/search'>
          <i className="material-icons" onClick={props.clearFeed}>search</i>
        </NavLink>
      </li>
      <li>
        <NavLink to='/saves'>
          <i className="material-icons">favorite_border</i>
        </NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearFeed: () => dispatch({ type: 'CLEAR_FEED' })
  }
}

export default connect(null, mapDispatchToProps)(Links);
