import * as React from 'react';
import { useState, useRef } from 'react';
import { lib } from './wasm';
import './index.less';

const Page = () => {
  const inputRef1 = useRef<any>(null);
  const inputRef2 = useRef<any>(null);

  const [num, setNum] = useState<number>(2);

  const onAdd = () => {
    const result = lib.exFunction?.add(inputRef1.current.value, inputRef2.current.value);
    setNum(result);
  };

  const onInput = (e) => {
    const result = lib.exFunction?.add(inputRef1.current.value, inputRef2.current.value);
    setNum(result);
  };

  return (
    <div className="page">
      <h1>WASM</h1>
      <input onChange={onInput} type="number" ref={inputRef1} defaultValue={1} />
      <span className="sign">+</span>
      <input onChange={onInput} type="number" ref={inputRef2} defaultValue={1} />
      <button className="sign" onClick={onAdd}>
        =
      </button>
      <span>{num}</span>
    </div>
  );
};

export default Page;
