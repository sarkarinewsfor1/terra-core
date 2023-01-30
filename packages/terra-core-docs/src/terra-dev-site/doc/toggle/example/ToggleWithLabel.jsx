import React, { useState } from 'react';
import Toggle from 'terra-toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import classNames from 'classnames/bind';
import styles from './ToggleExample.module.scss';

const ToggleWithLabel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  const cx = classNames.bind(styles);

  return (
    <div>
      <label htmlFor="Icon-label">
        <IconInformation className={cx('is-focused')} onClick={handleOnClick} a11yLabel="information Icon" tabIndex="0" role="button" area-labelledby="Toggle label" aria-expanded={isOpen} aria-controls="toggle" id="Icon-label" />
        <span id="Icon-label"> Toggle label</span>
      </label>
      <Toggle isOpen={isOpen} isAnimated>
        <p>
          Lorem ipsum dolor sit amet,
          <a href="#test">consectetur</a>
          {' '}
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Toggle>
    </div>
  );
};

export default ToggleWithLabel;
