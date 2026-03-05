"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export interface VerificationCardProps {
    backgroundImage?: string;
    idNumber?: string;
    name?: string;
    validThru?: string;
    label?: string;
    showEye?: boolean;
    fullIdNumber?: string;
    onEyeClick?: () => void;
}

export function VerificationCard({
    backgroundImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Unsplash abstract liquid
    idNumber = "ID **** 4590",
    name = "JANE DOE",
    validThru = "11/29",
    label = "IDENTITY CARD",
    showEye = false,
    fullIdNumber,
    onEyeClick,
}: VerificationCardProps) {
    const [showFullId, setShowFullId] = React.useState(false);
    const [currentId, setCurrentId] = React.useState(idNumber);

    const handleEyeClick = () => {
        if (showFullId) {
            setCurrentId(idNumber);
            setShowFullId(false);
        } else {
            const randomId = `${Math.floor(Math.random() * 10000).toString().padStart(4, '0')} ${Math.floor(Math.random() * 10000).toString().padStart(4, '0')} ${Math.floor(Math.random() * 10000).toString().padStart(4, '0')} ${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
            setCurrentId(randomId);
            setShowFullId(true);
        }
    };

    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "relative h-52 w-80 rounded-2xl p-6 shadow-2xl text-white flex flex-col justify-between bg-cover bg-center"
            )}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-2xl" />

            {/* Eye Icon */}
            {showEye && (
                <div className="absolute top-12 right-4 z-10 cursor-pointer" onClick={() => onEyeClick ? onEyeClick() : handleEyeClick()}>
                    <Eye className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
                </div>
            )}

            {/* Card Content */}
            <div className="relative z-10 flex justify-between items-start text-xs tracking-wide">
                <span>{label}</span>
                <span>VALID</span>
            </div>

            <div className="relative z-10">
                <p className="text-lg tracking-widest font-semibold">{currentId}</p>
                <div className="flex justify-between text-sm mt-2">
                    <span>{name}</span>
                    <span>{validThru}</span>
                </div>
            </div>
        </motion.div>
    );
}
