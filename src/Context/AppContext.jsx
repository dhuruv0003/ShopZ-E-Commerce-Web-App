import { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext();

export default function MyContextProvider({ children }) {
    const [isDarkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode(!isDarkMode)
    }

    const filterData = [
        {
            title: "All"
        },
        {
            title: "men's clothing",
        },
        {
            title: "jewelery",
        },
        {
            title: "electronics",
        },
        {
            title: "women's clothing",
        }
    ]

    const [category, setCategory] = useState(filterData[0].title);

    const [isloggedin, setloggedin] = useState(false)

    const value = {
        isDarkMode, setDarkMode, toggleDarkMode, filterData, category, setCategory,isloggedin, setloggedin
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
} 