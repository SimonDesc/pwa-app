'use client';

import { Button } from "@/components/ui/button";

export function Header({ title, subtitle, onLogout, showLogout = false }) {
    return (
        <div className="fixed top-0 left-0 right-0 bg-[#1C6DB6] text-white shadow-md z-50">
            <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-lg font-semibold">{title}</h1>
                <div className="flex items-center gap-4">
                    {subtitle && <div className="text-xs opacity-75">{subtitle}</div>}
                    {showLogout && (
                        <Button
                            variant="ghost"
                            onClick={onLogout}
                            className="h-7 px-2 py-1 text-xs text-white hover:text-white hover:bg-white/20"
                        >
                            Déconnexion
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}