import React, { createContext, useState } from "react";

export const BillContext = createContext();

export const BillProvider = ({ children }) => {
    const [amo, setAmo] = useState(0); // Total amount
    const [advance, setAdvance] = useState(0); // Advance amount
    const [balance, setBalance] = useState(0); // Balance to be paid

    return (
        <BillContext.Provider value={{ amo, setAmo, advance, setAdvance, balance, setBalance }}>
            {children}
        </BillContext.Provider>
    );
};
