import React, { useState } from "react";

export const PratosContext = React.createContext({});

export const PratosProvider = (props) => {
    const [pratosDia, setPratosDia] = useState([])


    return (
        <PratosContext.Provider value={{pratosDia, setPratosDia}}>
            {props.children}
        </PratosContext.Provider>
    );
};