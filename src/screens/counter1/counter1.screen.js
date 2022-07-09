import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Counter } from './../../components/counter/counter';

export const Counter1Screen = () => {
  /*

    Estado inicial: Ante cada cambio tenemos que recalcular todo el
    componente ya que no sabemos como se deberia mostrar cada
    componente por dentro y ante el cambio que acabamos de hacer 
    haciendo click en el boton de +

    Que pasa si le agregamos React.memo al Componente Counter?
  */

  /*

    Usando React Memo seguimos viendo la misma cantidad de
    renders que sin tenerlo, entonces que hacemos?

    Extra: probar que sucede si en lugar de 3 counter tenemos 20.
  
  */

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  const increment1 = () => setValue1(value1 + 1);
  const increment2 = () => setValue2(value2 + 1);
  const increment3 = () => setValue3(value3 + 1);

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
