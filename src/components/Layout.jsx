// src/components/Layout.jsx

import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-darkBg text-white">
            <header className="bg-darkCard p-6 shadow-md flex justify-between items-center w-full">
                <h1 className="text-2xl font-bold text-primary">Melk - Video Editor</h1>
                <nav className="space-x-6">
                    <a href="#about" className="hover:text-accent">About</a>
                    <a href="#clients" className="hover:text-accent">Clients</a>
                    <a href="#portfolio" className="hover:text-accent">Portfolio</a>
                    <a href="#contact" className="hover:text-accent">Contact</a>
                </nav>
            </header>
            <main className="flex-1 w-full">
                {children}
            </main>
            <footer className="bg-darkCard p-6 text-center w-full">
                <p>&copy; 2024 Melk Video Editor. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
