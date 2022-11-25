import React, { useContext } from 'react';

import { CalContext } from '../Context/CalProvider';
import { Textfit } from 'react-textfit';

const Screen = () => {
  const {calc} = useContext(CalContext)

  return (
    <Textfit className="screen">
      <h2>{calc.num}</h2>
    </Textfit>
  );
};

export default Screen;