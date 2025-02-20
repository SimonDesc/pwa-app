import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const InstallPWAButton = () => {
    const [installPrompt, setInstallPrompt] = useState(null);
    const [isInstallable, setIsInstallable] = useState(false);

    useEffect(() => {
        // Vérifie si l'app est déjà en mode standalone (PWA)
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

        if (isStandalone) {
            setIsInstallable(false);
            return;
        }

        // Capture l'événement d'installation
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setInstallPrompt(e);
            setIsInstallable(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        // Nettoyage
        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!installPrompt) return;

        // Affiche le prompt d'installation
        installPrompt.prompt();

        // Attend la réponse de l'utilisateur
        const choiceResult = await installPrompt.userChoice;

        // Réinitialise l'état après l'action de l'utilisateur
        if (choiceResult.outcome === 'accepted') {
            setIsInstallable(false);
        }
        setInstallPrompt(null);
    };

    if (!isInstallable) return null;

    return (
        <Button
            onClick={handleInstallClick}
            className="flex items-center gap-2 bg-[#1C6DB6] hover:bg-[#1C6DB6]/90"
        >
            <Download size={16} />
            Installer l'application
        </Button>
    );
};

export default InstallPWAButton;