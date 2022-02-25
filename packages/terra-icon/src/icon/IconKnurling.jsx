/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g data-name="48"><circle cx="15" cy="4.632" r="3.5"/><circle cx="15" cy="17.443" r="3.5"/><circle cx="15" cy="30.254" r="3.5"/><circle cx="15" cy="43.066" r="3.5"/><circle cx="33" cy="4.632" r="3.5"/><circle cx="33" cy="17.544" r="3.5"/><circle cx="33" cy="30.456" r="3.5"/><circle cx="33" cy="43.368" r="3.5"/></g></svg>`;
  return (
    <IconBase {...attributes} encoding="utf8" svgSource={svgString} ></IconBase>
  );
};

SvgIcon.displayName = "IconKnurling";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;

/* eslint-enable */
