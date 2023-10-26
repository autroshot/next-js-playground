import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className={`${inter.className}`}>
      <div className="mx-auto max-w-screen-md py-10 space-y-3">
        <h1 className="text-3xl font-bold">놀이터</h1>
        <div className="flex items-center space-x-3">
          <button
            className="bg-amber-500 px-4 py-1 rounded-md"
            onClick={handleClick}
          >
            버튼
          </button>
          <div>{count}</div>
        </div>
      </div>
    </main>
  );

  function handleClick() {
    setCount((count) => count + 1);
  }
}
