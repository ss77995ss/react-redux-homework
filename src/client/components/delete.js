import React from 'react';
import PropTypes from 'prop-types';
import rowPropType from '../types/shape';

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { target, onClick } = this.props;
    onClick(target);
  }

  render() {
    return (
      <div className="delete">
        <button type="button" className="delete__btn" onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

Delete.propTypes = {
  target: PropTypes.shape(rowPropType).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Delete;
