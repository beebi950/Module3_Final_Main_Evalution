import { Children, createContext,useState } from "react";

export const AuthContext =createContext();

export const AuthProvider =({children}) => {

    const [user,setUser]=useState(
        JSON,parser(localStorage,getItem("authUser")) || null
    );

    const login = (email,password) => {

        if(email === "admin@gmail.com" && password ===  "admin123"){

            const userData = {role:"admin"};
            setUser(userData);
            localStorage.setIteam("authUser",JSON.stringify(userData));
            return "admin";
        }
        
        if(email === "customer@gmail.com" && password ===  "customer123"){

            const userData = {role:"customer"};
            setUser(userData);
            localStorage.setIteam("authUser",JSON.stringify(userData));
            return "customer";
        }

        return null;
    };

    const logout=() => {

        setUser(null);
        localStorage.removeItem("authUser");
    };

    return(


        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>

    );
}