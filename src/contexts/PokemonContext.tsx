import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

interface PokemonContextType {
    id: string;
}

const PokemonContext = createContext<PokemonContextType>({ id: '' });

export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error('usePokemon must be used within a PokemonProvider');
    }
    return context;
};

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const id = new URLSearchParams(location.search).get('id') || '';

    return (
        <PokemonContext.Provider value={{ id }}>
            {children}
        </PokemonContext.Provider>
    );
};
