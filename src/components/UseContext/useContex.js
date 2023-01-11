import { createContext, useState } from "react";

export const contextAPI = createContext();

const ContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [shoeQuantity, setShoeQuantity] = useState(0);


    const shared = {
        isOpen,
        setIsOpen,
        shoeQuantity,
        setShoeQuantity
    }

    return (
        <contextAPI.Provider value={shared}>
            {children}
        </contextAPI.Provider>
    )
}

export default ContextProvider;