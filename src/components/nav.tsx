// src/components/nav.tsx (or HeroHeader.tsx)
'use client'
import Link from 'next/link' // Keep if you use actual <Link> for non-anchor links
import { Logo } from './logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useState, useEffect, useRef } from 'react' // Import useRef
import { cn } from '@/lib/utils'
import { ContactModal } from './contact-modal';

const menuItems = [
    { name: 'Our 5-Day Process', href: '#process' },
    { name: 'See Our Work', href: '#portfolio' },
    { name: 'Why Us / Pricing', href: '#whyus' },
]

// Define the gap you want between the banner and the navbar,
// or between the viewport top and the navbar if banner isn't there.
const NAV_VERTICAL_GAP = 8; // 8px gap (adjust as needed)

export const HeroHeader = () => {
    const [menuState, setMenuState] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false);
    // State to hold the calculated 'top' value for the navbar
    const [navTopPosition, setNavTopPosition] = useState(NAV_VERTICAL_GAP);
    const headerRef = useRef<HTMLElement>(null); // Ref for the header/nav element

    // Effect to calculate banner height and set navbar's vertical position
    useEffect(() => {
        // Function to calculate and set position
        const calculateNavPosition = () => {
            const bannerElement = document.getElementById('sticky-site-banner');
            let calculatedPosition = NAV_VERTICAL_GAP; // Default position (gap from top)

            // Check if banner exists AND is currently displayed (might be hidden via CSS)
            if (bannerElement && getComputedStyle(bannerElement).display !== 'none') {
                // If banner is visible, position is banner height + gap
                calculatedPosition = bannerElement.offsetHeight + NAV_VERTICAL_GAP;
            }
            // console.log("Banner Height:", bannerElement?.offsetHeight, "Calculated Nav Top:", calculatedPosition); // For Debugging
            setNavTopPosition(calculatedPosition);
        };

        // Run calculation initially after mount
        calculateNavPosition();

        // Optional: Recalculate on resize (if banner height might change)
        window.addEventListener('resize', calculateNavPosition);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('resize', calculateNavPosition);
        };
    }, []); // Empty dependency array: runs once on mount and cleanup on unmount

    // Effect to handle scroll state for visual changes (background, size)
    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled more than a small threshold (e.g., 10px)
            setIsScrolled(window.scrollY > 10);
        };
        // Run on mount to set initial state correctly
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- Smooth Scroll Handler ---
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const id = href.startsWith('#') ? href.slice(1) : null;
        if (!id) return;

        e.preventDefault();
        const element = document.getElementById(id);
        const headerElement = headerRef.current; // Get the header element

        if (element && headerElement) {
            const headerHeight = headerElement.offsetHeight;
            // Calculate element's top position relative to the document
            const elementTopRelativeToDocument = element.getBoundingClientRect().top + window.scrollY;

            // Calculate the final scroll position:
            // Element's top - header's height - the gap above the header
            // This aligns the top of the target element just below the header.
            // navTopPosition ALREADY includes the banner height offset.
            const finalScrollPosition = elementTopRelativeToDocument - headerHeight - NAV_VERTICAL_GAP;

            // console.log(`Scrolling to ${id}: Element Top=${elementTopRelativeToDocument}, Header Height=${headerHeight}, Final Scroll=${finalScrollPosition}`); // Debugging

            window.scrollTo({
                top: finalScrollPosition,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            setMenuState(false);
        } else {
            // Fallback or if element/header not found
            setMenuState(false);
        }
    };


    return (
        <>
            <ContactModal open={showModal} onClose={() => setShowModal(false)} />
            {/* Assign ref to the header element */}
            <header ref={headerRef}
                 className="fixed z-20 w-full transition-all duration-300" // Apply fixed, z-index, transition here
                 style={{ top: `${navTopPosition}px` }} // Apply dynamic top position
            >
                <nav
                    data-state={menuState ? 'active' : 'inactive'}
                    // Removed fixed/z-index/top from nav, handled by header now
                    className="w-full px-2"
                >
                    {/* Inner container applies scrolled styles */}
                    <div className={cn(
                        'mx-auto max-w-6xl px-6 transition-all duration-300 lg:px-12', // Base styles
                        // Apply scrolled styles conditionally
                        isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
                        )}>
                        <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            {/* Logo and Mobile Menu Toggle */}
                            <div className="flex w-full justify-between lg:w-auto">
                                <a
                                    href="#hero"
                                    aria-label="home"
                                    className="flex items-center space-x-2"
                                    onClick={(e) => handleSmoothScroll(e, '#hero')}
                                >
                                    <Logo />
                                </a>

                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                                >
                                    {/* Icon swap using conditional classes */}
                                    <Menu className={cn("m-auto size-6 duration-200", menuState && "hidden")} />
                                    <X className={cn("m-auto size-6 duration-200", !menuState && "hidden")} />
                                </button>
                            </div>

                            {/* Desktop Menu Links */}
                            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                                onClick={(e) => handleSmoothScroll(e, item.href)}
                                            >
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Mobile Menu Container & Desktop CTA Button */}
                             <div
                                className={cn(
                                    // Common container styles
                                    "flex w-full flex-wrap items-center justify-end md:flex-nowrap lg:w-fit lg:gap-6",
                                    // --- Mobile Menu Specific Styles ---
                                    // Positioning & Appearance (only when active)
                                    "absolute left-0 right-0 top-full mx-auto mt-2",
                                    "hidden w-[calc(100%-3rem)] space-y-8 rounded-3xl border bg-background p-6 shadow-xl shadow-zinc-300/20 data-[state=active]:flex data-[state=active]:flex-col", // Use flex, flex-col when active
                                    "dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-none",
                                    // --- Desktop Overrides ---
                                    // Reset mobile positioning/appearance, always flex row
                                    "lg:static lg:m-0 lg:mt-0 lg:flex lg:w-fit lg:flex-row lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                                    "lg:dark:border-transparent lg:dark:bg-transparent"
                                )}
                                data-state={menuState ? 'active' : 'inactive'}
                            >
                                {/* Mobile Links List (only in mobile state) */}
                                <div className="w-full lg:hidden">
                                    <ul className="space-y-6 text-base">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <a
                                                    href={item.href}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                                    onClick={(e) => handleSmoothScroll(e, item.href)} // Use same handler
                                                >
                                                    <span>{item.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* CTA Button (in mobile state and always on desktop) */}
                                <div className="flex w-full flex-col sm:flex-row sm:gap-3 md:w-fit lg:w-auto">
                                    <Button
                                        size="lg"
                                        className="w-full rounded-xl px-5 text-base sm:w-auto" // Full width on smallest, auto later
                                        onClick={() => {
                                            setShowModal(true);
                                            setMenuState(false); // Close menu
                                        }}
                                    >
                                        <span className="text-nowrap">Book a Call</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}