/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes} >
      <path d="M38.1 36l4.8-4.9-1-1.1-.6-.6-.5-.4-4.8 4.8-4.8-4.8-1.1 1-.5.5-.5.5 4.9 4.9-4.9 4.9.5.5.5.5 1.1 1L36 38l4.8 4.8.5-.5.6-.6 1-1-4.8-4.7zM24 38H3V5h4V1.8C7 .8 7.8 0 8.8 0h1.5c1 0 1.8.8 1.8 1.8V5h15V1.8c0-1 .8-1.8 1.8-1.8h1.5c1 0 1.8.8 1.8 1.8V5h4v19h-3v-7H6v18h18v3z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconRefusedSlotDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
