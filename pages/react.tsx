import MyCountDisplay from '@/components/my-count-display';
import { createContext, useState } from 'react';

export const MyCountContext = createContext(10);

export default function React() {
  const [count, setCount] = useState(0);
  const [MyCount, setMyCount] = useState(100);

  return (
    <div className="mx-auto max-w-screen-md py-10 space-y-3">
      <h1 className="text-3xl font-bold">리액트</h1>
      <div className="flex items-center space-x-3">
        <button
          className="bg-amber-500 px-4 py-1 rounded-md"
          onClick={handleClick}
        >
          버튼
        </button>
        <div>{count}</div>
      </div>
      <MyCountContext.Provider value={MyCount}>
        <MyCountDisplay onClick={handleMyCountButtonClick} />
        <MyCountDisplay onClick={handleMyCountButtonClick} />
      </MyCountContext.Provider>
    </div>
  );

  function handleClick() {
    setCount(count + 1);
  }

  function handleMyCountButtonClick() {
    setMyCount(MyCount + 1);
  }
}
