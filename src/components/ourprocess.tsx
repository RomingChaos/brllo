'use client';
import { Card, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
export default function Features() {
    return (
        <section id="process" className="bg-zinc-50 dark:bg-muted/25 py-16 md:py-32">
            <div className="mx-auto max-w-5xl py-16 px-6">
                {/* Heading */}
                <div className="mx-auto max-w-2xl space-y-6 text-center mb-12">
                    <h1 className="text-4xl font-semibold lg:text-5xl">
                        How We Build Your Flooring Website in Just 5 Days — Step by Step
                    </h1>
                    <p className="text-muted-foreground">
                        We specialize in fast, high-converting flooring websites designed to generate leads and grow your business. Our proven 5-day process ensures your site is custom-branded, SEO-optimized, and ready to launch quickly.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="mx-auto grid gap-6 sm:grid-cols-2">
                    {/* Step 1 */}
                    <Card className="group overflow-hidden shadow-zinc-950/5 sm:rounded-xl">
                        <CardHeader>
                            <div className="md:p-2">
                                <p className="font-medium text-xl">Step 1: Planning & Structure (Day 1)</p>
                                <p className="text-muted-foreground mt-3 text-sm">
                                    We start with a high-converting flooring website template and finalize your key pages (Homepage, Services, Gallery, About, Contact) to showcase your expertise.
                                </p>
                            </div>
                        </CardHeader>

                        <div className="pl-6 md:pl-8">
                            <div className="overflow-hidden rounded-l-lg border-l border-t border-b pl-2 pt-2 pb-2">
                                <div className="w-full h-64 overflow-hidden">
                                    <Image
                                        src="/images/process-1.webp"
                                        className="hidden dark:block object-cover w-full h-full"
                                        alt="Planning and structure"
                                        width={1207}
                                        height={929}
                                    />
                                    <Image
                                        src="/images/process-1.webp"
                                        className="shadow dark:hidden object-cover w-full h-full"
                                        alt="Planning and structure"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Step 2 */}
                    <Card className="group overflow-hidden shadow-zinc-950/5 sm:rounded-xl">
                        <CardHeader>
                            <div className="md:p-2">
                                <p className="font-medium text-xl">Step 2: Branding & Content Integration (Days 1-2)</p>
                                <p className="text-muted-foreground mt-3 text-sm">
                                    Your logo, brand colors, service details, and project photos are integrated with SEO-friendly, persuasive content tailored for flooring companies.
                                </p>
                            </div>
                        </CardHeader>

                        <div className="pl-6 md:pl-8">
                            <div className="overflow-hidden rounded-l-lg border-l border-t border-b pl-2 pt-2 pb-2">
                                <div className="w-full h-64 overflow-hidden">
                                    <Image
                                        src="/images/process-2.webp"
                                        className="hidden dark:block object-cover w-full h-full"
                                        alt="Step 2: Branding and content integration - Flooring Website Process"
                                        width={1207}
                                        height={929}
                                    />
                                    <Image
                                        src="/images/process-2.webp"
                                        className="shadow dark:hidden object-cover w-full h-full"
                                        alt="Step 2: Branding and content integration - Flooring Website Process"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Step 3 */}
                    <Card className="group overflow-hidden shadow-zinc-950/5 sm:rounded-xl">
                        <CardHeader>
                            <div className="md:p-2">
                                <p className="font-medium text-xl">Step 3: Review & Revisions (Days 3-4)</p>
                                <p className="text-muted-foreground mt-3 text-sm">
                                    You review the site and provide feedback. We make quick, focused revisions to ensure your website perfectly represents your brand and goals.
                                </p>
                            </div>
                        </CardHeader>

                        <div className="pl-6 md:pl-8">
                            <div className="overflow-hidden rounded-l-lg border-l border-t border-b pl-2 pt-2 pb-2">
                                <div className="w-full h-64 overflow-hidden">
                                    <Image
                                        src="/images/process-3.webp"
                                        className="hidden dark:block object-cover w-full h-full"
                                        alt="Review and revisions"
                                        width={1207}
                                        height={929}
                                    />
                                    <Image
                                        src="/images/process-3.webp"
                                        className="shadow dark:hidden object-cover w-full h-full"
                                        alt="Review and revisions"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Step 4 */}
                    <Card className="group overflow-hidden shadow-zinc-950/5 sm:rounded-xl">
                        <CardHeader>
                            <div className="md:p-2">
                                <p className="font-medium text-xl">Step 4: Final QA & Launch (Day 5)</p>
                                <p className="text-muted-foreground mt-3 text-sm">
                                    We perform final quality checks, connect your custom domain, and launch your new flooring website — fully optimized and ready to attract customers.
                                </p>
                            </div>
                        </CardHeader>

                        <div className="pl-6 md:pl-8">
                            <div className="overflow-hidden rounded-l-lg border-l border-t border-b pl-2 pt-2 pb-2">
                                <div className="w-full h-64 overflow-hidden">
                                    <Image
                                        src="/images/process-4.webp"
                                        className="hidden dark:block object-cover w-full h-full"
                                        alt="Final QA & Launch"
                                        width={1207}
                                        height={929}
                                    />
                                    <Image
                                        src="/images/process-4.webp"
                                        className="shadow dark:hidden object-cover w-full h-full"
                                        alt="Final QA & Launch"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}