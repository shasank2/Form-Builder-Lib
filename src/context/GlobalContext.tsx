import { createContext, useState } from "react";

const GlobalContext = createContext({
  formState: [],
  setformState: (formState: any) => { },
  specialCustomizationStep: null,
  setSpecialCustomizationStep: (specialCustomizationStep: string|any) => { }
});

const GlobalProvider = ({ children }: any) => {

  const [formState, setformState] = useState<any>([])
  const [specialCustomizationStep, setSpecialCustomizationStep] = useState<any>(null)

  return (
    <GlobalContext.Provider
      value={{
        formState,
        setformState,
        specialCustomizationStep,
        setSpecialCustomizationStep,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;
export { GlobalContext, GlobalProvider };