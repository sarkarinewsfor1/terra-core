import React, { useState } from 'react';
import Card from 'terra-card';
import Switch from 'terra-switch';

const AllergiesSwitch = () => {
  const [value, setValue] = useState(true); // makes switch on by default
  return (
    <div>
      <Card>
        <Card.Body>
          <Switch
            isChecked={value}
            labelText="Show allergies"
            onChange={setValue}
          />
        </Card.Body>

      </Card>
    </div>

  );
};

export default AllergiesSwitch;
