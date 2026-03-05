"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useId } from "react";

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const defaultTextColor = 'text-gray-300';
    const hoverTextColor = 'text-white';
    const textSizeClass = 'text-sm';

    return (
        <a href={href} className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}>
            <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
                <span className={defaultTextColor}>{children}</span>
                <span className={hoverTextColor}>{children}</span>
            </div>
        </a>
    );
};

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
    const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const id = useId();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (shapeTimeoutRef.current) {
            clearTimeout(shapeTimeoutRef.current);
        }

        if (isOpen) {
            setHeaderShapeClass('rounded-xl');
        } else {
            shapeTimeoutRef.current = setTimeout(() => {
                setHeaderShapeClass('rounded-full');
            }, 300);
        }

        return () => {
            if (shapeTimeoutRef.current) {
                clearTimeout(shapeTimeoutRef.current);
            }
        };
    }, [isOpen]);

    const logoElement = (
        <div className="relative w-5 h-5 flex items-center justify-center">
            <span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 top-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
            <span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 left-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
            <span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 right-0 top-1/2 transform -translate-y-1/2 opacity-80"></span>
            <span className="absolute w-1.5 h-1.5 rounded-full bg-gray-200 bottom-0 left-1/2 transform -translate-x-1/2 opacity-80"></span>
        </div>
    );

    const navLinksData = [
        { label: 'Manifesto', href: '#1' },
        { label: 'Careers', href: '#2' },
        { label: 'Discover', href: '#3' },
    ];

    const loginButtonElement = (
        <button className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 w-full sm:w-auto">
            LogIn
        </button>
    );

    const signupButtonElement = (
        <div className="relative group w-full sm:w-auto">
            <div className="absolute inset-0 -m-2 rounded-full
                 hidden sm:block
                 bg-gray-100
                 opacity-40 filter blur-lg pointer-events-none
                 transition-all duration-300 ease-out
                 group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"></div>
            <button className="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full sm:w-auto">
                Signup
            </button>
        </div>
    );

    return (
        <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-20
                       flex flex-col items-center
                       pl-6 pr-6 py-3 backdrop-blur-sm
                       ${headerShapeClass}
                       border border-[#333] bg-[#1f1f1f57]
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-[border-radius] duration-0 ease-in-out`}>

            <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
                <div className="flex items-center">
                    {logoElement}
                </div>

                <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm">
                    {navLinksData.map((link) => (
                        <AnimatedNavLink key={link.href} href={link.href}>
                            {link.label}
                        </AnimatedNavLink>
                    ))}
                </nav>

                <div className="hidden sm:flex items-center gap-2 sm:gap-3">
                    <Dialog>
                        <DialogTrigger asChild>
                            {loginButtonElement}
                        </DialogTrigger>
                        <DialogContent>
                            <div className="flex flex-col items-center gap-2">
                                <div
                                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="stroke-zinc-800 dark:stroke-zinc-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
                                    </svg>
                                </div>
                                <DialogHeader>
                                    <DialogTitle className="sm:text-center">Welcome back</DialogTitle>
                                    <DialogDescription className="sm:text-center">
                                        Enter your credentials to login to your account.
                                    </DialogDescription>
                                </DialogHeader>
                            </div>

                            <form className="space-y-5">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor={`${id}-email`}>Email</Label>
                                        <Input id={`${id}-email`} placeholder="hi@yourcompany.com" type="email" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`${id}-password`}>Password</Label>
                                        <Input id={`${id}-password`} placeholder="Enter your password" type="password" required />
                                    </div>
                                </div>
                                <div className="flex justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id={`${id}-remember`} />
                                        <Label htmlFor={`${id}-remember`} className="font-normal text-muted-foreground">
                                            Remember me
                                        </Label>
                                    </div>
                                    <a className="text-sm underline hover:no-underline" href="#">
                                        Forgot password?
                                    </a>
                                </div>
                                <Button type="button" className="w-full">
                                    Sign in
                                </Button>
                            </form>

                            <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                                <span className="text-xs text-muted-foreground">Or</span>
                            </div>

                            <Button variant="outline">Login with Google</Button>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            {signupButtonElement}
                        </DialogTrigger>
                        <DialogContent>
                            <div className="flex flex-col items-center gap-2">
                                <div
                                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="stroke-zinc-800 dark:stroke-zinc-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
                                    </svg>
                                </div>
                                <DialogHeader>
                                    <DialogTitle className="sm:text-center">Create Account</DialogTitle>
                                    <DialogDescription className="sm:text-center">
                                        Join our community and start your journey with us.
                                    </DialogDescription>
                                </DialogHeader>
                            </div>

                            <form className="space-y-5">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor={`${id}-signup-email`}>Email</Label>
                                        <Input id={`${id}-signup-email`} placeholder="hi@yourcompany.com" type="email" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`${id}-signup-password`}>Password</Label>
                                        <Input id={`${id}-signup-password`} placeholder="Enter your password" type="password" required />
                                    </div>
                                </div>
                                <div className="flex justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id={`${id}-signup-remember`} />
                                        <Label htmlFor={`${id}-signup-remember`} className="font-normal text-muted-foreground">
                                            Remember me
                                        </Label>
                                    </div>
                                </div>
                                <Button type="button" className="w-full">
                                    Create Account
                                </Button>
                            </form>

                            <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                                <span className="text-xs text-muted-foreground">Or</span>
                            </div>

                            <Button variant="outline">Sign up with Google</Button>
                        </DialogContent>
                    </Dialog>
                </div>

                <button className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none" onClick={toggleMenu} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    )}
                </button>
            </div>

            <div className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[1000px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center space-y-4 text-base w-full">
                    {navLinksData.map((link) => (
                        <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors w-full text-center">
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="flex flex-col items-center space-y-4 mt-4 w-full">
                    <Dialog>
                        <DialogTrigger asChild>
                            {loginButtonElement}
                        </DialogTrigger>
                        <DialogContent>
                            <div className="flex flex-col items-center gap-2">
                                <div
                                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="stroke-zinc-800 dark:stroke-zinc-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
                                    </svg>
                                </div>
                                <DialogHeader>
                                    <DialogTitle className="sm:text-center">Welcome back</DialogTitle>
                                    <DialogDescription className="sm:text-center">
                                        Enter your credentials to login to your account.
                                    </DialogDescription>
                                </DialogHeader>
                            </div>

                            <form className="space-y-5">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor={`${id}-email`}>Email</Label>
                                        <Input id={`${id}-email`} placeholder="hi@yourcompany.com" type="email" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`${id}-password`}>Password</Label>
                                        <Input id={`${id}-password`} placeholder="Enter your password" type="password" required />
                                    </div>
                                </div>
                                <div className="flex justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id={`${id}-remember`} />
                                        <Label htmlFor={`${id}-remember`} className="font-normal text-muted-foreground">
                                            Remember me
                                        </Label>
                                    </div>
                                    <a className="text-sm underline hover:no-underline" href="#">
                                        Forgot password?
                                    </a>
                                </div>
                                <Button type="button" className="w-full">
                                    Sign in
                                </Button>
                            </form>

                            <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                                <span className="text-xs text-muted-foreground">Or</span>
                            </div>

                            <Button variant="outline">Login with Google</Button>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            {signupButtonElement}
                        </DialogTrigger>
                        <DialogContent>
                            <div className="flex flex-col items-center gap-2">
                                <div
                                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="stroke-zinc-800 dark:stroke-zinc-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
                                    </svg>
                                </div>
                                <DialogHeader>
                                    <DialogTitle className="sm:text-center">Create Account</DialogTitle>
                                    <DialogDescription className="sm:text-center">
                                        Join our community and start your journey with us.
                                    </DialogDescription>
                                </DialogHeader>
                            </div>

                            <form className="space-y-5">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor={`${id}-signup-email`}>Email</Label>
                                        <Input id={`${id}-signup-email`} placeholder="hi@yourcompany.com" type="email" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`${id}-signup-password`}>Password</Label>
                                        <Input id={`${id}-signup-password`} placeholder="Enter your password" type="password" required />
                                    </div>
                                </div>
                                <div className="flex justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id={`${id}-signup-remember`} />
                                        <Label htmlFor={`${id}-signup-remember`} className="font-normal text-muted-foreground">
                                            Remember me
                                        </Label>
                                    </div>
                                </div>
                                <Button type="button" className="w-full">
                                    Create Account
                                </Button>
                            </form>

                            <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                                <span className="text-xs text-muted-foreground">Or</span>
                            </div>

                            <Button variant="outline">Sign up with Google</Button>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </header>
    );
}
