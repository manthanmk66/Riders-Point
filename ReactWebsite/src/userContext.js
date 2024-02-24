import axios from 'axios';
import React from 'react';
import base_url from './api/bootapi';

export const CurrentUserContext = React.createContext();

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    const fetchCurrentUser = async () => {
        setIsLoading(true);
        axios.get(base_url + "/auth/profile").then(result => {
            setIsLoading(false);
            setCurrentUser(result.data);
        }).catch(e => {
            setIsLoading(false);
        });
    };

    return (
        <CurrentUserContext.Provider value={{ currentUser, fetchCurrentUser, isLoading }}>
            {children}
        </CurrentUserContext.Provider>
    );
};

export const useCurrentUser = () => React.useContext(CurrentUserContext);