// import { createContext, useState } from "react";

// export interface createContextInterface {
//   data: DataInterface;
//   handleChange: () => void;
//   userLoged: () => void;
// }

// export interface DataInterface {
//   value: boolean;
//   isAuthenticated: boolean;
// }

// export interface AppControllerInterface {
//   children: React.ReactNode;
// }

// export const AppContext = createContext({} as createContextInterface);

// export function AppController({ children }: AppControllerInterface) {
//   const [data, setData] = useState<DataInterface>({
//     value: true,
//     isAuthenticated: false,
//   });

//   function handleChange() {
//     if (data.value) {
//       setData({ ...data, value: false });
//     } else {
//       setData({ ...data, value: true });
//     }
//   }

//   function userLoged() {
//     const hasToken = () => localStorage.getItem("token_fd");
//     if (hasToken !== null) {
//       setData({ ...data, isAuthenticated: true });
//     } else {
//       setData({ ...data, isAuthenticated: false });
//     }
//   }
//   return (
//     <AppContext.Provider value={{ data, userLoged, handleChange }}>
//       {children}
//     </AppContext.Provider>
//   );
// }

import { createContext, useState } from "react";

type AppChildren = {
  children: React.ReactNode;
};

type AppContext = {
  data: DataType;
  userLoged: () => void;
  handleChange: () => void;
};

type DataType = {
  isAuthenticated: boolean;
  value: boolean;
};

export const CreateAppContext = createContext({} as AppContext);

export function AppContext({ children }: AppChildren) {
  const [data, setData] = useState<DataType>({
    isAuthenticated: false,
    value: false,
  });

  function userLoged() {
    const hasToken = () => localStorage.getItem("token_fd");
    if (hasToken !== null) {
      setData({ ...data, isAuthenticated: true });
    } else {
      setData({ ...data, isAuthenticated: false });
    }
  }

  function handleChange() {
    if (data.value) {
      setData({ ...data, value: false });
    } else {
      setData({ ...data, value: true });
    }
  }

  return (
    <CreateAppContext.Provider value={{ data, userLoged, handleChange }}>
      {children}
    </CreateAppContext.Provider>
  );
}
