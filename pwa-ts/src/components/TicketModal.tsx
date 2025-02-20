'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

// Définition des interfaces
interface Ticket {
    id: string;
    client: string;
    product: string;
    status: string;
}

interface MenuOption {
    icon: LucideIcon;
    label: string;
}

interface TicketModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    selectedTicket: Ticket | null;
    menuOptions: MenuOption[];
}

export function TicketModal({
                                isOpen,
                                onOpenChange,
                                selectedTicket,
                                menuOptions
                            }: TicketModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] w-[92%] mx-auto rounded-lg">
                <DialogHeader>
                    <DialogTitle className="text-center text-[#1C6DB6]">
                        {selectedTicket?.id} - {selectedTicket?.client}
                    </DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-6 mt-6 px-2">
                    {menuOptions.map((option, index) => (
                        <Button
                            key={option.label}
                            variant="outline"
                            className={`h-24 flex flex-col items-center justify-center gap-3 border-2 
                                ${index % 2 === 0
                                ? 'border-[#1C6DB6] text-[#1C6DB6] hover:bg-[#1C6DB6]'
                                : 'border-[#FF9225] text-[#FF9225] hover:bg-[#FF9225]'} 
                                hover:text-white transition-all`}
                            onClick={() => {
                                console.log(`Option ${option.label} clicked`);
                                onOpenChange(false);
                            }}
                        >
                            <option.icon className="w-6 h-6" />
                            <span className="text-sm font-medium">{option.label}</span>
                        </Button>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}