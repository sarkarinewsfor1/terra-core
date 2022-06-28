/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-action-header/lib/ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader
    text="Previous Enabled Next Disabled Action Header"
    onPrevious={() => alert('You clicked previous!')}
    level={1}
  />
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
