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

  const resetCal = () => {
    setCalc({sing: '', num: 0, res: 0})
  }

  const handleNumbers = () => {
    const numString = value.toString()

    let numValue
    if(numString === '0' && calc.num === '0') {
      numValue = 0

    } else {
      numValue = Number(calc.num + numString)
    }

    setCalc({
      ...calc,
      num: numValue,
    })

  }

  const handleClick = () => {
    const result = {
      '.': commaClick,
      'C': resetCal,
    }

    if (result[value]) {
      return result[value]()
    }

    return handleNumbers()
  }

  return (
    <button onClick={handleClick} className='button'>
      { value }
    </button>
  );
};

export default Button;