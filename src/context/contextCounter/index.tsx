import { createContext, useContext, useState } from "react";

const CountContext = createContext({});

export default function CountProvider({ children }: any) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export const useCount = () => {
  const context = useContext(CountContext);
  const { count, setCount }: any = context;
  return { count, setCount };
};
