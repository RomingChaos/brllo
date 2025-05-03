'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from '@/components/nav'
import { ContactModal } from '@/components/contact-modal' // <-- Make sure path is correct

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section id="hero">
          <div className="relative pt-24 md:pt-36">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance font-bold text-[36px] md:text-[64px] lg:text-[72px] lg:mt-16 tracking-[-0.05em] leading-[1.1em]"
                >
                  Custom Flooring Website Design That Drives Leads & Sales
                </TextEffect>

                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-[16px] md:text-[18px] text-muted-foreground"
                >
                  Get a fully optimized, mobile-friendly flooring company website ready in just 5 days — no hassle, no delays.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                    <Button
                      size="lg"
                      onClick={() => setModalOpen(true)}
                      className="h-10.5 rounded-xl px-5"
                    >
                      Book a Call
                    </Button>
                  </div>
                  <Button asChild size="lg" variant="ghost" className="h-10.5 rounded-xl px-5">
                    <Link href="#testimonial">
                      <span className="text-nowrap">Learn More</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
              {/* Image Section */}
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
              >
                <div className="relative mt-8 px-2 sm:mt-12 md:mt-20">
                  <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                    <Image
                      className="bg-background w-full h-auto relative hidden rounded-2xl dark:block"
                      src="/images/flooring-1.webp"
                      alt="app screen"
                      width={1440}
                      height={1080}
                      priority
                    />
                    <Image
                      className="z-2 border-border/25 w-full h-auto relative rounded-2xl border dark:hidden"
                      src="/images/flooring-1.webp"
                      alt="Modern flooring website preview by Brllo Studio"
                      width={1440}
                      height={1080}
                      priority
                    />
                  </div>
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Modal */}
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
