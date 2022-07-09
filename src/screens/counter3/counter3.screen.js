import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { Counter } from './../../components/counter/counter';

export const Counter3Screen = () => {
  /*

    Genial, nuestro componente ahora solo se vuelve a renderizar si alguno de sus props cambio,
    pero que sucede si tenemos una operacion que es todavia muy costosa para ejecutarse en
    cada render y solo necesitamos que se ejecute cuando el segundo contador cambia de valor?

    En este caso podemos utilizar useMemo o useEffect:

    useMemo: permite que pasemos una funcion como parametro, seguida de una lista de
    dependencias. En este caso podriamos usar value2 como dependencia y que useMemo se encargue de ejecutar nuevamente solo cuando value2 cambie.

    Okey ..., pero por que no usar useEffect en lugar de useMemo?

    Sucede que useEffect se ejecuta luego de que la vista se renderice por primera vez, en 
    cambio useMemo se ejecuta antes de que la vista se renderice por lo que si necesitamos
    el valor antes de retornar la vista debemos usar useMemo.
  
  */

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const increment1 = useCallback(() => setValue1(value1 + 1), [value1]);
  const increment2 = useCallback(() => setValue2(value2 + 1), [value2]);

  const NumberOfRenders = useRef(0);

  const expensiveValue = ExpensiveOperation(0);
  // const expensiveValue = useMemo(() => ExpensiveOperation(0), [value2]);

  const anotherExpensiveValue = 0;

  /*
  
  const [anotherExpensiveValue, setAnotherExpensiveValue] = useState(0);

  useEffect(() => {
    setAnotherExpensiveValue(ExpensiveOperation(0));
  }, []);
  
  */

  return (
    <div>
      <h1>Number of Renders: {NumberOfRenders.current}</h1>
      <h1>Resultado costoso: {expensiveValue}</h1>
      <h1>Otro resultado costoso: {anotherExpensiveValue}</h1>
      <Counter
        value={value1}
        increment={increment1}
        numberOfRenders={NumberOfRenders}
      />
      <Counter
        value={value2}
        increment={increment2}
        numberOfRenders={NumberOfRenders}
      />
    </div>
  );
};

const ExpensiveOperation = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
