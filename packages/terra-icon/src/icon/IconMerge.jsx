/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="is-bidi"><path d="M47.3 24L38 15v6H22v-6.2C22 10 18 6 13.2 6H0v6h13.2c1.6 0 2.8 1.3 2.8 2.8v18.3c0 1.6-1.3 2.8-2.8 2.8H0v6h13.2c4.9 0 8.8-4 8.8-8.8V27h16v6l9.3-9z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconMerge";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;

/* eslint-enable */
