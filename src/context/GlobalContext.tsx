import { createContext, useState } from "react";

const GlobalContext = createContext({
  formState: [],
  setformState: (formState: any) => { },
});

const GlobalProvider = ({ children }: any) => {

  const [formState, setformState] = useState<any>([])

  return (
    <GlobalContext.Provider
      value={{
        formState,
        setformState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;
export { GlobalContext, GlobalProvider };