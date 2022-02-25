/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg data-name="Idea 1 copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M35 35H2a2 2 0 01-2-2V17a2 2 0 012-2h33v2.5H2.5v15H35zm11-20h-4v2.5h3.5v15H42V35h4a2 2 0 002-2V17a2 2 0 00-2-2zm-2 25h-4V10h4V7H33v3h4v30h-4v3h11v-3zM8 24a3 3 0 103 3 3 3 0 00-3-3z"/></svg>`;
  return (
    <IconBase {...attributes} encoding="utf8" svgSource={svgString} ></IconBase>
  );
};

SvgIcon.displayName = "IconAutoText";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Idea 1 copy"};

export default SvgIcon;

/* eslint-enable */
