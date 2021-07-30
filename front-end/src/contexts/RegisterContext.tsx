import { createContext, ReactNode, useState } from "react";

interface RegisterContextProviderProps {
  children: ReactNode;
}

// interface RegisterDataType {
//   email: string;
//   password?: string;
//   groupName: string;
//   IES: string;
//   UF: string;
//   city: string;
// }

interface RegisterContextType {
  email: string;
  password: string;
  groupName: string;
  IES: string;
  UF: string;
  city: string;
  startLoadSpinner: boolean;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setGroupName: (value: string) => void;
  setIES: (value: string) => void;
  setUF: (value: string) => void;
  setCity: (value: string) => void;
  setStartLoadSpinner: (value: boolean) => void;
}

export const RegisterContext = createContext({} as RegisterContextType);

export function RegisterContextProvider(props: RegisterContextProviderProps): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [groupName, setGroupName] = useState('');
  const [IES, setIES] = useState('');
  const [UF, setUF] = useState('');
  const [city, setCity] = useState('');
  const [startLoadSpinner, setStartLoadSpinner] = useState(false);

  return (
    <RegisterContext.Provider value={{
      email,
      password,
      groupName,
      IES,
      UF,
      city,
      startLoadSpinner,
      setEmail,
      setPassword,
      setGroupName,
      setIES,
      setUF,
      setCity,
      setStartLoadSpinner
    }}>
      {props.children}
    </RegisterContext.Provider>
  )
}