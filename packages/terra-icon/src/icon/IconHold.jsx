/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M25.2 25.9c.5.5.6 1.4.2 1.8-.5.5-1.3.4-1.8-.2l-5.3-5.3c-.3-.2-.5-.7-.5-1.2v-8.9c0-.8.5-1.4 1.2-1.4s1.2.6 1.2 1.4v8.5l5 5.3zm.7 10.6v-2.7c-2.1 1.1-4.5 1.8-7 1.8-8 0-14.6-6.5-14.6-14.6 0-8 6.5-14.6 14.6-14.6 1.5 0 3 .2 4.3.7 5.9 1.8 10.2 7.4 10.2 13.9 0 1-.1 1.9-.3 2.9h2.4c.2-.9.2-1.9.2-2.9v-1c-.2-3.5-1.4-6.7-3.4-9.3L34 9c.6-.6.6-1.6 0-2.3l-1.1-1.1c-.6-.6-1.6-.6-2.3 0L29 7.5c-1.5-1.1-3.2-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7c-4.8.7-9 3.5-11.7 7.4-.3.4-.5.9-.8 1.3v.1c-.2.4-.5.9-.6 1.3 0 .1 0 .1-.1.2-.2.4-.3.9-.5 1.3 0 .1-.1.1-.1.2-.1.4-.2.9-.3 1.3 0 .1 0 .2-.1.3-.1.5-.2.9-.2 1.4v.2c-.1.7-.2 1.3-.2 1.8 0 3.4 1 6.6 2.8 9.3 0 .1.1.1.1.2l.1.1c1.2 1.7 2.7 3.2 4.5 4.4.1.1.2.1.3.2 2.7 1.7 5.8 2.7 9.2 2.7.6 0 1.2 0 1.8-.1.2 0 .3 0 .5-.1.2 0 .5-.1.7-.1 1.3-.1 2.7-.6 4-1.2z"/><path d="M38.9 26h6v20h-6V26zm-11 20h6V26h-6v20z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconHold";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;

/* eslint-enable */
