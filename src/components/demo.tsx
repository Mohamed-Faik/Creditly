"use client";

import { Download } from "lucide-react";
import CosmicNebulaMastercard from "@/components/ui/cursor-wander-card";

export default function DemoOne() {
    const scrollToCards = () => {
        const element = document.getElementById('cards-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="relative flex w-full h-[60vh] md:h-[80vh] mt-20 flex-col items-center justify-center overflow-hidden bg-transparent">
                <div className="text-center">
                    <h1 className="font-serif text-4xl md:text-6xl text-white pb-2 tracking-wide">
                        Welcome to CREDITLY
                    </h1>

                    <div className="cursor-pointer flex justify-center mt-10" onClick={scrollToCards}>
                        <CosmicNebulaMastercard 
                            cardholderName="GET YOUR FREE VCC" 
                            height="140px" 
                            width="220px" 
                            logoText={{ topText: "CREDITLY", bottomText: "" }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
