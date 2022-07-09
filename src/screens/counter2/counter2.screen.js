import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Counter } from './../../components/counter/counter';

export const Counter2Screen = () => {
  /*

    React memo nos permite que nuestro componente wrappeado solo se renderise nuevamente si
    alguna de las props cambio, pero por que se sigue renderizando si el contador de los counter
    no cambio?

    Respuesta: cada vez que ejecutamos:
    
    () => setValue1(value1 + 1), [value1]) 
    
    por mas que la funcion haga lo mismo en cada render, se genera una nueva referencia de esa
    funcion ya que al fin y al cabo es una nueva funcion que se genera que hace lo mismo que antes.

    Solucion: useCallback

    Usando useCallback generamos una sola vez la funcion a menos que las dependencias que definamos
    hayan variado, en este caso podemos usar value1 como dependencia y solo crear una nueva funcion
    cuando este cambie.
  
  */

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  const increment1 = useCallback(() => setValue1(value1 + 1), [value1]);
  const increment2 = useCallback(() => setValue2(value2 + 1), [value2]);
  const increment3 = useCallback(() => setValue3(value3 + 1), [value3]);

  const NumberOfRenders = useRef(0);

  return (
    <div>
      <h1>Number of Renders: {NumberOfRenders.current}</h1>
      <div style={{ display: 'flex' }}>
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
        <Counter
          value={value3}
          increment={increment3}
          numberOfRenders={NumberOfRenders}
        />
      </div>
    </div>
  );
};
