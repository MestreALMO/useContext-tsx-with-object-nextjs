import { createContext, useContext, useState } from "react";

const CtxObjectContext = createContext({});

export default function CtxObjectProvider({ children }: any) {
  const [ctxObject, setCtxObject] = useState([]);

  return (
    <CtxObjectContext.Provider value={{ ctxObject, setCtxObject }}>
      {children}
    </CtxObjectContext.Provider>
  );
}

export const useCtxObject = () => {
  const context = useContext(CtxObjectContext);
  const { ctxObject, setCtxObject }: any = context;
  return [ctxObject, setCtxObject];
};
