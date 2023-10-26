import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';
import TestImage from '/public/test-image.png';

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
        <Image src={TestImage} alt="테스트용 로컬 이미지" />
        <Image
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1575&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="테스트용 원격 이미지"
          width={640}
          height={381}
          priority
        />
      </div>
    </main>
  );

  function handleClick() {
    setCount((count) => count + 1);
  }
}
