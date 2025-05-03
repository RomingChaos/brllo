'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { useState } from 'react'

import Head from 'next/head';

export default function FAQsTwo() {
    const [activeItem, setActiveItem] = useState('item-1'); // Keep track of the active (opened) item

    const faqItems = [
        {
            id: 'item-1',
            question: 'How can you build a quality flooring website in 5 days?',
            answer: 'We use a proven, SEO-optimized template tailored for flooring companies, focusing on fast customization rather than building from scratch. This allows us to get your website up and running quickly while ensuring it’s effective for your business.',
        },
        {
            id: 'item-2',
            question: 'What is the cost?',
            answer: 'Our pricing is competitive, typically starting at $2,000+. This is much less than traditional custom websites, allowing you to get a high-quality, professional site at a fraction of the cost.',
        },
        {
            id: 'item-3',
            question: 'Are there ongoing fees?',
            answer: 'No agency fees after launch. You’ll pay a monthly hosting fee, which ranges between $15–$35/month, directly to your website platform. This keeps your costs predictable and affordable.',
        },
        {
            id: 'item-4',
            question: 'What if I want changes?',
            answer: 'We include a dedicated revision phase (Days 3-4) to ensure you’re 100% satisfied with the website. During this phase, you can make adjustments or ask for updates before the final launch.',
        },
        {
            id: 'item-5',
            question: 'Do you offer marketing services?',
            answer: 'Yes! We provide specialized Flooring SEO and Google Ads management to help drive traffic to your site and increase your visibility after launch. Our goal is to help you attract the right customers.',
        },
        {
            id: 'item-6',
            question: 'How does payment work?',
            answer: 'We require a 50% deposit upfront to start the project, with the remaining 50% due upon your approval before the website goes live. This ensures you’re satisfied with the progress and the final product.',
        },
    ];

    return (
        <section id="faq" className="py-16 md:py-24">
            <Head>
                <title>Flooring Website FAQs | Brllo Studio</title>
                <meta name="description" content="Find answers to common questions about our 5-day flooring website process, SEO, customization, pricing, and more." />
                <meta name="keywords" content="flooring website FAQ, flooring company web design questions, Brllo Studio support, website process, SEO, pricing, customization" />
            </Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How can you build a quality flooring website in 5 days?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We use a proven, SEO-optimized template tailored for flooring companies, focusing on fast customization rather than building from scratch. This allows us to get your website up and running quickly while ensuring it’s effective for your business."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is the website SEO optimized?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, every website we build is SEO-optimized with best practices including meta tags, alt text, sitemaps, and fast loading times."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I customize the design?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely! We tailor the website to your brand, colors, and content needs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the pricing?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Our pricing is transparent and listed on the website. Contact us for a custom quote if you have special requirements."
                                }
                            }
                        ]
                    })
                }}
            />
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xxl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-4xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Discover quick and comprehensive answers to common questions about our services and features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        value={activeItem}
                        onValueChange={(value: string) => setActiveItem(value)}
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <p className="text-muted-foreground mt-6 px-8 text-center">
                    Can't find what you're looking for? Contact our{' '}
                    <Link
                        href="#"
                        className="text-primary font-medium hover:underline">customer support team</Link>
                </p>
            </div>
        </section>
    );
}