'use client';

import { useState, FormEvent } from 'react';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        setError('');
        console.log('Logging in with', { email, password });
    };

    return (
        <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="text-white text-2xl font-semibold mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-300 mb-2">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                    />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;