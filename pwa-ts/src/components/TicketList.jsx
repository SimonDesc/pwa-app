'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Building2, Package } from "lucide-react";
import { Header } from './Header';

export function TicketList({ tickets, onTicketClick, onLogout  }) {
    return (
        <>
            <Header
                title="GMAO Mobile"
                subtitle={`${tickets.length} dossiers`}
                onLogout={onLogout}
                showLogout={true}
            />
            <div className="max-w-md mx-auto p-4 pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-white">
                <ScrollArea className="h-[calc(100vh-80px)]">
                    <div className="space-y-4">
                        {tickets.map((ticket) => (
                            <Card
                                key={ticket.id}
                                className="hover:bg-slate-50 transition-colors cursor-pointer border-l-4 border-l-[#1C6DB6]"
                                onClick={() => onTicketClick(ticket)}
                            >
                                <CardContent className="p-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-sm font-medium bg-[#1C6DB6] text-white px-2 py-1 rounded">
                                                    {ticket.id}
                                                </span>
                                                <span className="text-xs px-2 py-1 rounded bg-[#FF9225] text-white">
                                                    {ticket.status}
                                                </span>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <Building2 className="w-4 h-4 text-[#1C6DB6]" />
                                                    <span className="text-sm">{ticket.client}</span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <Package className="w-4 h-4 text-[#1C6DB6]" />
                                                    <span className="text-sm">{ticket.product}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </>
    );
}