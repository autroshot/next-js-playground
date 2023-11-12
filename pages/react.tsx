import CountDisplay from '@/components/count-display';
import CountButton from '@/components/my-count-button';
import { CountProvider } from '@/contexts/count';
import { useState } from 'react';

export default function React() {
    const [count, setCount] = useState(0);

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
            <CountProvider>
                <div className="border-2">
                    <h2>컨텍스트 + 축적기</h2>
                    <CountDisplay />
                    <CountButton />
                </div>
            </CountProvider>
        </div>
    );

    function handleClick() {
        setCount(count + 1);
    }
}
