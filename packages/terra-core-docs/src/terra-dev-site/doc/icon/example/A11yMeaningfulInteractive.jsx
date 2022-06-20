// This file is autogenerated from scripts/src/generate-example
/* eslint-disable */
import React from "react";
import IconMediaPlay from 'terra-icon/lib/icon/IconMediaPlay';
import IconMediaFastForward from 'terra-icon/lib/icon/IconMediaFastForward';
import IconMediaRewind from 'terra-icon/lib/icon/IconMediaRewind';
import {width, height} from './common';
import Card from 'terra-card';

const A11yMeaningfulInteractive = () => (
  <Card>
    <Card.Body>
      <div role="group" aria-labelledby="controlsLabel">
        <span id="controlsLabel">Playback controls</span><br/>
        <button type="button">
          <IconMediaRewind a11yLabel="Rewind" width={width} height={height} />
        </button>
        <button type="button">
          <IconMediaPlay a11yLabel="Play" width={width} height={height} />
        </button>
        <button type="button">
          <IconMediaFastForward a11yLabel="Fast Forward" width={width} height={height} />
        </button>
      </div>
    </Card.Body>
  </Card>
);

export default A11yMeaningfulInteractive;