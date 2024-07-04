// Header.tsx
import React from 'react';

const Header: React.FC = () => {

    return (
        <header className="flex flex-col items-center my-6">
            <a href="/"><img src="/logo.svg" alt="Pokemon" className="mt-4" /></a>
        </header>
    );
};

export default Header;
