import React from 'react';
import PropTypes from 'prop-types';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './CustomImage.css';

const CustomImage = ({ src, alt, width = '100%' }) => {
  return (
    <div className="custom-image-container">
      <img src={useBaseUrl(src)} alt={alt} style={{ width: width }} className="custom-image" />
    </div>
  );
};

CustomImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
};

CustomImage.defaultProps = {
  width: '100%',
};

export default CustomImage;
