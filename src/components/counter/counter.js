import React, { useEffect, useState, useRef } from 'react';
import './counter.css';
import { NumberOfRenders } from './../../App';

export const Counter = React.memo(
  ({
    value,
    increment,
    numberOfRenders,
    expensiveOperation,
    expensiveOperationLabel,
  }) => {
    useEffect(() => {
      // console.log(value);
    }, [increment]);

    numberOfRenders.current = numberOfRenders.current + 0.5;

    return (
      <div className="counter">
        <div className="counter__value">{value}</div>
        <div className="counter__button" onClick={increment}>
          +
        </div>
        {expensiveOperationLabel && (
          <div className="counter__button" onClick={expensiveOperation}>
            {expensiveOperationLabel}
          </div>
        )}
      </div>
    );
  }
);
