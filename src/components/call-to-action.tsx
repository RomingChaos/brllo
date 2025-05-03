'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react';
import { ContactModal } from './contact-modal';

export default function CallToAction() {
    const [showModal, setShowModal] = useState(false);
    return (
        <section className="py-16" aria-label="Call to Action Section">
            <div
                className="mx-auto max-w-7xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32 relative bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/cta-background.jpg)' }}
            >
                <div className="text-center">
                    <h2 className="text-balance text-3xl font-semibold lg:text-4xl">Ready to Grow Your Flooring Business?</h2>
                    <p className="mt-4 ">Book a free 20-minute discovery call to see how our fast, SEO-friendly websites can boost your leads and sales.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button size="lg" onClick={() => setShowModal(true)}>
  <span>Book a Call</span>
</Button>
<ContactModal open={showModal} onClose={() => setShowModal(false)} />
                    </div>
                </div>
            </div>
        </section>
    )
}
