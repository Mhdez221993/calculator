import React, { useContext } from 'react';

import { CalContext } from '../Context/CalProvider';
import { Textfit } from 'react-textfit';

const Screen = () => {
  const {calc} = useContext(CalContext)

  return (
    <Textfit className="screen" mode='single'>
      {calc.num ? calc.num : calc.res}
    </Textfit>
  );
};

export default Screen;