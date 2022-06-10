/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes} >
      <path d="M48 27v-6h-7.2a16.37 16.37 0 00-2.8-6.8l5-5L38.8 5l-5 5A18 18 0 0027 7.1V0h-6v7.1a16.37 16.37 0 00-6.8 2.8l-5-5-4.3 4.3 5 5A17.82 17.82 0 007.1 21H0v6h7.2a16.37 16.37 0 002.8 6.8l-5.1 5.1 4.2 4.2 5.1-5.1a17.82 17.82 0 006.8 2.8V48h6v-7.2a16.37 16.37 0 006.8-2.8l5.1 5.1 4.2-4.2-5.1-5.1a16.37 16.37 0 002.8-6.8zm-35.1-3.1A11.1 11.1 0 1124 35a11.14 11.14 0 01-11.1-11.1z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconSettingsDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */