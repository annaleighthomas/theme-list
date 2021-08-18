import React from 'react';
import PropTypes from 'prop-types';

const Characters = ({ Name, Planet, Species, Status }) => (
  <div>
    <span>{Name}</span>
    <p>{Planet}</p>
    <p>{Species}</p>
    <p>{Status}</p>
  </div>
);

Characters.propTypes = {
  Name: PropTypes.string.isRequired,
  Planet: PropTypes.string.isRequired,
  Species: PropTypes.string.isRequired,
  Status: PropTypes.string.isRequired
};

export default Characters;
