import React from 'react';
import LoginPage from './pages/login/login';

const HomePage: React.FC = () => {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
            <LoginPage />
        </div>
    );
};

export default HomePage;