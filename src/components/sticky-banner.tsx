// src/components/sticky-banner.tsx
'use client';

import React from 'react';

export default function StickyBanner() {
    return (
        <div
            id="sticky-site-banner" // <-- Add this ID
            className="
                fixed          // Position fixed relative to the viewport
                top-0          // Stick to the top edge
                left-0         // Align to the left edge
                right-0        // Align to the right edge (spans full width)
                z-50           // Ensure it's above most other content (adjust if needed)
                // --- Apply the custom linear gradient ---
                bg-gradient-to-r from-[#1E42FF] via-[#12A1C5] to-[#1E42FF]
                // --- End custom gradient ---
                text-white     // Text color
                py-2           // Vertical padding
                px-4           // Horizontal padding
                text-center    // Center the text
                text-sm        // Font size
                font-medium    // Font weight
                shadow-md      // Add a subtle shadow
            "
            role="region"      // Semantically identifies this as a region
            aria-label="Site Announcement Banner" // Provides accessibility context
        >
            📣 Launch Your Custom Flooring Website in Just 5 Days! 📣
        </div>
    );
}