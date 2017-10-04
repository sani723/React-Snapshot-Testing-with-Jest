import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Status from '../../utils/Constants';
import './Link.css';

class Link extends Component {

  constructor(props) {
    super(props);

    this.state = {
      class: Status.NORMAL
    };

  } // constructor ends

  handleMouseEnter = () => {
    this.setState({
      class: Status.HOVERED
    });
  }

  handleMouseLeave = () => {
    this.setState({
      class: Status.NORMAL
    });
  }

  render() {

    return (
      <a
        className={this.state.class}
        href={this.props.page}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.text}
      </a>
    );

  } // render ends

}

Link.defaultProps = {
  page: "#",
  text: "Follow us"
};

Link.propTypes = {
  page: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Link;
