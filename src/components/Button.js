import React, { useContext } from 'react';

import { CalContext } from '../Context/CalProvider';

const Button = ({value}) => {
  const {calc, setCalc} = useContext(CalContext);

  const commaClick = () => {
    setCalc({
      ...calc,
      num: calc.num.toString().includes('.') ? calc.num : calc.num + value
    })
  }

  const reset = () => {
    setCalc({sing: '', num: 0, res: 0})
  }

  const handleClick = () => {
    const result = {
      '.': commaClick,
      'C': reset,
    }

    return result[value]()
  }

  return (
    <button onClick={handleClick} className='button'>
      { value }
    </button>
  );
};

export default Button;