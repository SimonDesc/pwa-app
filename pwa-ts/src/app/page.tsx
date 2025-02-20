'use client'

import {useEffect, useState} from 'react';
import {
    Building2,
    Package,
    ClipboardList,
    Package2,
    Camera,
    PenLine
} from "lucide-react";
import {TicketModal} from "@/components/TicketModal";
import {LoginPage} from "@/components/LoginPage";
import {TicketList} from "@/components/TicketList";


interface Ticket {
    id: string;
    client: string;
    product: string;
    status: string;
}

const tickets = [
    {
        id: "TICKET-001",
        client: "Entreprise ABC",
        product: "Machine industrielle X500",
        status: "En cours"
    },
    {
        id: "TICKET-002",
        client: "Société XYZ",
        product: "Système de ventilation V2",
        status: "En attente"
    },
    {
        id: "TICKET-003",
        client: "Industrie 123",
        product: "Robot assembleur R100",
        status: "Nouveau"
    }
];

const menuOptions = [
    { icon: ClipboardList, label: "Compte rendu" },
    { icon: Package2, label: "Article" },
    { icon: Camera, label: "Photo" },
    { icon: PenLine, label: "Signature" },
];

export default function Home() {
    useEffect(() => {
        // Charger le script d'enregistrement du SW
        const script = document.createElement('script');
        script.src = '/register-sw.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = () => {
        setIsAuthenticated(false);
        setSelectedTicket(null);
        setIsModalOpen(false);
    };

    const handleTicketClick = (ticket: Ticket) => {
        setSelectedTicket(ticket);
        setIsModalOpen(true);
    };
    if (!isAuthenticated) {
        return <LoginPage onLogin={setIsAuthenticated} />;
    }

    return (
        <>
            <TicketList
                tickets={tickets}
                onTicketClick={handleTicketClick}
                onLogout={handleLogout}
            />
            <TicketModal
                isOpen={isModalOpen}
                onOpenChange={setIsModalOpen}
                selectedTicket={selectedTicket}
                menuOptions={menuOptions}
            />
        </>
    );
}