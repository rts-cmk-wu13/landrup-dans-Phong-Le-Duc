"use client";


import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";


export const AuthContext = createContext(null);

export function AuthProvider({ children }) {

    const [authData, setAuthData] = useState(null);

    // Læs token fra cookie ved app-load med js-cookie (kun på klienten)
    useEffect(() => {
        const token = Cookies.get("token");
        console.log("[AuthContext] token fra cookie:", token);
        if (token) {
            try {
                const decoded = jwtDecode(token);
                console.log("[AuthContext] decoded token:", decoded);
                // Sæt kun authData hvis id findes (brug id som userId)
                if (decoded?.data?.id) {
                    setAuthData({
                        token,
                        username: decoded.data.username,
                        firstname: decoded.data.firstname,
                        lastname: decoded.data.lastname,
                        age: decoded.data.age,
                        userId: decoded.data.id, // brug id
                        role: decoded.data.role
                    });
                } else {
                    setAuthData(null);
                }
            } catch (e) {
                console.log("[AuthContext] Fejl ved decoding:", e);
                setAuthData(null);
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
}