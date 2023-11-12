import { useCountDispatch } from '@/contexts/count';

export default function CountButton() {
    const countDispatch = useCountDispatch();
    if (countDispatch === null) {
        return null;
    }

    return (
        <div className="space-x-3">
            <button
                className="bg-amber-500 px-4 py-1 rounded-md"
                onClick={() => countDispatch({ type: 'up', amount: 1 })}
            >
                +1 버튼
            </button>
            <button
                className="bg-amber-500 px-4 py-1 rounded-md"
                onClick={() => countDispatch({ type: 'up', amount: 2 })}
            >
                +2 버튼
            </button>
            <button
                className="bg-amber-500 px-4 py-1 rounded-md"
                onClick={() => countDispatch({ type: 'down', amount: 1 })}
            >
                -1 버튼
            </button>
            <button
                className="bg-amber-500 px-4 py-1 rounded-md"
                onClick={() => countDispatch({ type: 'down', amount: 2 })}
            >
                -2 버튼
            </button>
        </div>
    );
}
