import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);

    useEffect(() => {
        const auth = getAuth();

        // onAuthStateChanged  returns an "unsubscribe" function
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
            }
            setCheckingStatus(false);
        });

        // Clean up the listener using fibase function
        return () => unsubscribe();
    }, []);

    return { loggedIn, checkingStatus };
};