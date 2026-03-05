"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SignInPage, Testimonial } from './sign-in';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'signin' | 'signup';
}

const sampleTestimonials: Testimonial[] = [
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/57.jpg",
    name: "Sarah Chen",
    handle: "@sarahdigital",
    text: "Amazing platform! The user experience is seamless and the features are exactly what I needed."
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/64.jpg",
    name: "Marcus Johnson",
    handle: "@marcustech",
    text: "This service has transformed how I work. Clean design, powerful features, and excellent support."
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "David Martinez",
    handle: "@davidcreates",
    text: "I've tried many platforms, but this one stands out. Intuitive, reliable, and genuinely helpful for productivity."
  },
];

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode }) => {
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Sign In submitted:", data);
    onClose();
  };

  const handleGoogleSignIn = () => {
    console.log("Continue with Google clicked");
    onClose();
  };
  
  const handleResetPassword = () => {
    console.log("Reset Password clicked");
  }

  const handleCreateAccount = () => {
    console.log("Create Account clicked");
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="relative w-full h-full bg-background overflow-hidden">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <SignInPage
                  title={mode === 'signup' ? <span className="font-light text-foreground tracking-tighter">Create Account</span> : <span className="font-light text-foreground tracking-tighter">Welcome</span>}
                  description={mode === 'signup' ? "Join our community and start your journey with us" : "Access your account and continue your journey with us"}
                  heroImageSrc="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&q=80"
                  testimonials={sampleTestimonials}
                  onSignIn={handleSignIn}
                  onGoogleSignIn={handleGoogleSignIn}
                  onResetPassword={handleResetPassword}
                  onCreateAccount={handleCreateAccount}
                />
              </div>
            </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
