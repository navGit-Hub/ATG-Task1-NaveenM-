import React,{useContext,useState} from 'react';


const AppContext=React.createContext();

const AppProvider=({children})=>{

const [login,setLogin]=useState(false);

const changeLogin=()=>{setLogin(!login);
}

return (
    <AppContext.Provider
    value={{login,
    changeLogin}}
    >{children}</AppContext.Provider>
)
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider};




