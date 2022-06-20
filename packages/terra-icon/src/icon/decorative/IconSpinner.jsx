/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes} >
      <path d="M24 0a3.8 3.8 0 11-3.8 3.8A3.8 3.8 0 0124 0zm0 40.4a3.8 3.8 0 11-3.8 3.8 3.8 3.8 0 013.8-3.8zm20.2-20.2a3.8 3.8 0 11-3.8 3.8 3.8 3.8 0 013.8-3.8zm-40.4 0A3.8 3.8 0 110 24a3.8 3.8 0 013.8-3.8zM38.3 5.9a3.8 3.8 0 11-3.8 3.8 3.8 3.8 0 013.8-3.8zM9.7 34.5a3.8 3.8 0 11-3.8 3.8 3.8 3.8 0 013.8-3.8zm0-28.6a3.8 3.8 0 11-3.8 3.8 3.8 3.8 0 013.8-3.8zm28.6 28.6a3.8 3.8 0 11-3.8 3.8 3.8 3.8 0 013.8-3.8z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconSpinnerDec";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isSpin":true};

export default SvgIcon;
/* eslint-enable */