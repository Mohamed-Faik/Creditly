"use client";

import { Component } from '@/components/ui/3d-card-1';
import { FlippableCreditCard } from '@/components/ui/credit-debit-card';
import { VerificationCard } from '@/components/ui/verification-card';
import { LogoCloud } from "@/components/ui/logo-cloud-4";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import CosmicNebulaMastercard from "@/components/ui/cursor-wander-card";

const DemoCreditCard = () => {
    return (
        <div>
            <div id="cards-section" className="flex w-full min-h-screen justify-center items-start pt-48 bg-transparent gap-4 flex-wrap pb-10">
                <div className="w-full flex justify-center mb-8">
                    <HandWrittenTitle
                        title="Prepaid Cards"
                    />
                </div>

            {/* Added Flippable Credit Card below the 3 cards */}
            <div className="w-full flex justify-center mt-12 pb-24 gap-12 flex-wrap lg:gap-24">
                <div className="transform scale-90 md:scale-100">
                    <FlippableCreditCard
                        cardholderName="JANE DOE"
                        cardNumber="•••• •••• •••• 5678"
                        expiryDate="08/25"
                        cvv="123"
                        colorClass="from-blue-500 to-indigo-600"
                    />
                </div>
                <div className="transform scale-90 md:scale-100 z-10">
                    <FlippableCreditCard
                        cardholderName="RAVI KATIYAR"
                        cardNumber="•••• •••• •••• 1939"
                        expiryDate="12/27"
                        cvv="987"
                    />
                </div>
                <div className="transform scale-90 md:scale-100">
                    <FlippableCreditCard
                        cardholderName="JOHN SMITH"
                        cardNumber="•••• •••• •••• 4321"
                        expiryDate="11/28"
                        cvv="456"
                        colorClass="from-amber-500 to-orange-600"
                    />
                </div>
            </div>

            <div className="w-full flex justify-center mb-8">
                <HandWrittenTitle
                    title="Trial & Subscription Cards"
                />
            </div>

            {/* Verification Cards */}
            <div className="w-full flex justify-center mt-12 pb-24 gap-12 flex-wrap lg:gap-24">
                <VerificationCard
                    backgroundImage="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2671&auto=format&fit=crop"
                    idNumber="**** **** **** 7421"
                    name="RUIXEN UI"
                    validThru="07/31"
                    label="VERIFICATION CARD"
                    showEye={true}
                />
                <VerificationCard
                    backgroundImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                    idNumber="**** **** **** 4590"
                    name="JANE DOE"
                    validThru="11/29"
                    label="IDENTITY CARD"
                    showEye={true}
                />
                <VerificationCard
                    backgroundImage="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2629&auto=format&fit=crop"
                    idNumber="**** **** **** 8832"
                    name="JOHN SMITH"
                    validThru="03/28"
                    label="VERIFICATION CARD"
                    showEye={true}
                />
            </div>

            <div className="w-full flex justify-center mb-8">
                <HandWrittenTitle
                    title="Premium VCC Options"
                />
            </div>

            {/* Premium Verification Cards */}
            <div className="w-full flex justify-center mt-12 pb-24 gap-12 flex-wrap lg:gap-24">
                <VerificationCard
                    backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
                    idNumber="**** **** **** 1234"
                    name="ALEX JOHNSON"
                    validThru="05/26"
                    label="PREMIUM CARD"
                    showEye={true}
                />
                <VerificationCard
                    backgroundImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
                    idNumber="**** **** **** 5678"
                    name="SARAH WILLIAMS"
                    validThru="09/27"
                    label="VIP CARD"
                    showEye={true}
                />
                <VerificationCard
                    backgroundImage="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2574&auto=format&fit=crop"
                    idNumber="**** **** **** 9012"
                    name="MICHAEL BROWN"
                    validThru="12/28"
                    label="ELITE CARD"
                    showEye={true}
                />
            </div>

            <div className="w-full flex justify-center mb-8">
                <HandWrittenTitle
                    title="Cosmic Nebula Cards"
                />
            </div>

            {/* Cosmic Nebula Cards */}
            <div className="w-full flex justify-center mt-12 pb-24 gap-12 flex-wrap lg:gap-24">
                <div className="transform scale-90 md:scale-100">
                    <CosmicNebulaMastercard 
                        cardholderName="COSMIC USER" 
                        height="220px" 
                        width="350px" 
                        theme={{ primaryColor: "#8B5CF6", secondaryColor: "#6D28D9", glowColor: "rgba(139, 92, 246, 0.8)" }}
                        backgroundColor="linear-gradient(135deg, #1a0033 0%, #330066 50%, #5500b3 100%)"
                    />
                </div>
                <div className="transform scale-90 md:scale-100 z-10">
                    <CosmicNebulaMastercard cardholderName="NEBULA MASTER" height="220px" width="350px" />
                </div>
                <div className="transform scale-90 md:scale-100">
                    <CosmicNebulaMastercard 
                        cardholderName="STELLAR CARD" 
                        height="220px" 
                        width="350px" 
                        theme={{ primaryColor: "#10B981", secondaryColor: "#059669", glowColor: "rgba(16, 185, 129, 0.8)" }}
                        backgroundColor="linear-gradient(135deg, #001a1a 0%, #003333 50%, #005555 100%)"
                    />
                </div>
            </div>
        </div>
    </div>
    );
};

export default DemoCreditCard;
