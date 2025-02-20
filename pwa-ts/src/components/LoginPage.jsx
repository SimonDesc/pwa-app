'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from './Header';
import InstallPWAButton from './InstallPWAButton';

export function LoginPage({ onLogin }) {
    const [credentials, setCredentials] = useState({ username: 'TS', password: 'TS' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulation de login
        if (credentials.username && credentials.password) {
            onLogin(true);
        }
    };

    return (
        <>
            <Header title="GMAO Mobile" />
            <div className="max-w-md mx-auto p-4 pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-white">
                <div className="mt-10 space-y-6 max-w-sm mx-auto">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-[#1C6DB6]">Connexion</h2>
                        <p className="text-slate-500 mt-2">Accédez à vos dossiers</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="text"
                                placeholder="Identifiant"
                                value={credentials.username}
                                onChange={(e) => setCredentials(prev => ({...prev, username: e.target.value}))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Mot de passe"
                                value={credentials.password}
                                onChange={(e) => setCredentials(prev => ({...prev, password: e.target.value}))}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-[#1C6DB6] hover:bg-[#1C6DB6]/90"
                        >
                            Se connecter
                        </Button>
                    </form>

                    <div className="mt-4 flex justify-center">
                        <InstallPWAButton/>
                    </div>
                </div>
            </div>
        </>
    );
}