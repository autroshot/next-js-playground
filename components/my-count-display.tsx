import { MyCountContext } from '@/pages/react';
import { useContext } from 'react';

export default function MyCountDisplay({ onClick }: Props) {
  const myCount = useContext(MyCountContext);

  return (
    <div className="flex items-center space-x-3">
      <button className="bg-amber-500 px-4 py-1 rounded-md" onClick={onClick}>
        버튼
      </button>
      <div>{myCount}</div>
    </div>
  );
}

interface Props {
  onClick: () => void;
}
