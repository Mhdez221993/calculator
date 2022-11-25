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

  const signClic = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.sign,
      num: 0
    })
  }


  const equalClick = () => {
    if (calc.num && calc.sign) {
      const math = (a, b, sign) => {
        const operation = {
          '/': (a, b) => a / b,
          'x': (a, b) => a * b,
          '-': (a, b) => a - b,
          '+': (a, b) => a + b,
        }

        return operation[sign](a, b)
      }

      setCalc({
        num: math(calc.res, calc.num, calc.sign),
        res: 0,
        sign: ''
      })
    }
  }

  const percentClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.num / 100),
      sign: ''
    })
  }

  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: '',
    })
  }

  const handleClick = () => {
    const result = {
      '.': commaClick,
      'C': resetCal,
      '/': signClic,
      'x': signClic,
      '-': signClic,
      '+': signClic,
      '=': equalClick,
      '%': percentClick,
      '+-': invertClick,
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