'use client'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import React, { useState } from 'react';
import { ContactModal } from './contact-modal';

export default function Pricing() {
    const [showModal, setShowModal] = useState(false);
    return (
        <section id="pricing" className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h1 className="text-center text-4xl font-semibold lg:text-5xl">Why Choose Us for Your Flooring Website?</h1>
            <p className='text-muted-foreground'>We understand the flooring industry and deliver websites that convert visitors into paying customers — all within 5 days.</p>
          </div>

            <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
                <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
                    <div className="space-y-4">
                        <div>
                            <h2 className="font-medium">What You Get with Others</h2>
                        </div>

                        <hr className="border-dashed" />

                        <ul className="list-outside space-y-3 text-sm">
                            {[
                                'Turnaround Time: 2–4 Months (Longer Project Duration)',
                                'Cost: $5,000 – $10,000+ (Higher Investment)',
                                'Your Time Commitment: 4–5+ Hours (Significant Time Required)',
                                'Flooring Industry Focus: ❌ Generic (Not Specialized)',
                                'SEO-Optimized Content: ❌ Often Missing (Limited SEO Focus)',
                                'Flooring Stock Images: ❌ Often Missing (Stock Images Not Provided)',
                                'Easy Updates: ❌ Developer Needed (Requires Developer for Changes)'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <Check className="size-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-4">
                            <div>
                                <h2 className="font-medium">Why Choose Brllo?</h2>
                            </div>

                            <Button className="w-full" onClick={() => setShowModal(true)}>
  Book a Call
</Button>
<ContactModal open={showModal} onClose={() => setShowModal(false)} />
                        </div>

                        <div>
                            <div className="text-sm font-medium">Here’s What You Get with Brllo:</div>

                            <ul className="mt-4 list-outside space-y-3 text-sm">
                                {[
                                    'Turnaround Time: 5 Days (Quick Project Completion)',
                                    'Cost: $2000+ (Flexible Pricing)',
                                    'Your Time Commitment: ~1 Hour (Minimal Effort Needed)',
                                    'Flooring Industry Focus: ✅ Specialized (Expert in Flooring)',
                                    'SEO-Optimized Content: ✅ Included (SEO-Friendly Content)',
                                    'Flooring Stock Images: ✅ Included (Professional Stock Images Provided)',
                                    'Easy Updates: ✅ DIY or Support Available (Simple Updates, No Developer Needed)'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}
