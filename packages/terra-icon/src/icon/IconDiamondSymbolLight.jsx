/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#FFF" d="M4.2 24L24 4.201 43.798 24 24 43.799z"/><path d="M24 0L0 24l24 24 24-24L24 0zm19.8 24L24 43.8 4.2 24 24 4.2 43.8 24z"/></svg>`;
  return (
    <IconBase {...attributes} encoding="utf8" svgSource={svgString} ></IconBase>
  );
};

SvgIcon.displayName = "IconDiamondSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;

/* eslint-enable */
