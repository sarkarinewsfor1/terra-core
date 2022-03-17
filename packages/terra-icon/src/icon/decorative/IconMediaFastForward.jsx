/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes} >
      <path d="M22 41.28L43.718 24 22 6.72v13.526L5 6.72v34.56l17-13.526V41.28z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconMediaFastForwardDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
