import {
    Dispatch,
    ReactNode,
    createContext,
    useContext,
    useReducer,
} from 'react';

const CountContext = createContext<number>(0);
const CountDispatchContext = createContext<Dispatch<Action> | null>(null);

export function CountProvider({ children }: { children: ReactNode }) {
    const [count, dispatch] = useReducer(countReducer, 0);

    return (
        <CountContext.Provider value={count}>
            <CountDispatchContext.Provider value={dispatch}>
                {children}
            </CountDispatchContext.Provider>
        </CountContext.Provider>
    );
}

export function useCount() {
    return useContext(CountContext);
}
export function useCountDispatch() {
    return useContext(CountDispatchContext);
}

function countReducer(count: number, action: Action) {
    switch (action.type) {
        case 'up': {
            return count + action.amount;
        }
        case 'down': {
            return count - action.amount;
        }
    }
}

interface Action {
    type: 'up' | 'down';
    amount: number;
}
