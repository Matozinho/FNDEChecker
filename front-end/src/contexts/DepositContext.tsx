import { createContext, ReactNode, useState } from "react";

interface DepositContextProviderProps {
  children: ReactNode;
}

interface depositDataType {
  data: string;
  ordemBancaria: string;
  referencia: string;
  valor: string;
}

interface DepositContextType {
  homeModalIsOpen: boolean;
  depositsData: depositDataType[],
  setHomeModalIsOpen: (value: boolean) => void;
  setDepositsData: (value: []) => void;
}

export const DepositContext = createContext({} as DepositContextType);

export function DepositContextProvider(props: DepositContextProviderProps): JSX.Element {
  const [homeModalIsOpen, setHomeModalIsOpen] = useState(false);
  const [depositsData, setDepositsData] = useState<depositDataType[]>([]);

  return (
    <DepositContext.Provider value={{
      homeModalIsOpen,
      depositsData,
      setHomeModalIsOpen,
      setDepositsData,
    }}>
      {props.children}
    </DepositContext.Provider>
  )
}