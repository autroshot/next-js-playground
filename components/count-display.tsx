import { useCount } from '@/contexts/count';

export default function CountDisplay() {
    const count = useCount();

    return (
        <div className="flex items-center space-x-3">
            <div>{count}</div>
        </div>
    );
}
