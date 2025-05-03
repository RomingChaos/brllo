import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import Head from 'next/head';

export default function Testimonials() {
  return (
    <section id="testimonial">
      <Head>
                <title>Flooring Website Reviews & Testimonials | Brllo Studio</title>
                <meta name="description" content="Read real reviews and testimonials from happy flooring business owners who used Brllo Studio for their website design." />
                <meta name="keywords" content="flooring website reviews, Brllo Studio testimonials, flooring company feedback, client success stories" />
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Product",
                      "name": "Brllo Studio Flooring Website Design",
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5",
                        "reviewCount": "4"
                      },
                      "review": [
                        {
                          "@type": "Review",
                          "author": { "@type": "Person", "name": "Dan Miller" },
                          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                          "reviewBody": "Brllo delivered a stunning, SEO-optimized website in under a week. The process was seamless from start to finish — their team took care of everything, from design to mobile responsiveness. Since launching, our organic traffic has grown significantly, and we've seen more than double the number of qualified leads. It's been a game-changer for our business."
                        },
                        {
                          "@type": "Review",
                          "author": { "@type": "Person", "name": "Sarah Blake" },
                          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                          "reviewBody": "The fast turnaround and expert design helped us get more calls and sales quickly."
                        },
                        {
                          "@type": "Review",
                          "author": { "@type": "Person", "name": "Eric Lin" },
                          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                          "reviewBody": "Brllo gave us a sleek, mobile-friendly website that ranks great on Google. Highly recommend!"
                        },
                        {
                          "@type": "Review",
                          "author": { "@type": "Person", "name": "Megan Torres" },
                          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                          "reviewBody": "In just 5 days, we had a professional site live — and leads have doubled since!"
                        }
                      ]
                    })
                  }}
                />
            </Head>
            <section className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                    <div className="relative z-10 mx-auto max-w-xl space-y-3 sm:space-y-4 text-center">
                        <h2 className="text-3xl font-medium lg:text-4xl">What Our Flooring Clients Say</h2>
                        <p className="text-muted-foreground">Trusted by Flooring Professionals — See Their Success Stories</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                        <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                            <CardHeader>
                                <img className="h-6 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height="24" width="auto" style={{ display: 'none' }} />
                            </CardHeader>
                            <CardContent>
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p className="text-xl font-medium">
                                        Brllo delivered a stunning, SEO-optimized website in under a week. The process was seamless from start to finish — their team took care of everything, from design to mobile responsiveness. Since launching, our organic traffic has grown significantly, and we've seen more than double the number of qualified leads. It's been a game-changer for our business.
                                    </p>
                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-12">
                                            <AvatarFallback>DM</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <cite className="text-sm font-medium">Dan Miller</cite>
                                            <span className="text-muted-foreground block text-sm">Owner, Miller Flooring ⭐️⭐️⭐️⭐️⭐️</span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>

                        <Card className="md:col-span-2">
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p className="text-xl font-medium">
                                        The fast turnaround and expert design helped us get more calls and sales quickly.
                                    </p>
                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-12">
                                            <AvatarFallback>SB</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <cite className="text-sm font-medium">Sarah Blake</cite>
                                            <span className="text-muted-foreground block text-sm">Owner, Blake Floors ⭐️⭐️⭐️⭐️⭐️</span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p>
                                        Brllo gave us a sleek, mobile-friendly website that ranks great on Google. Highly recommend!
                                    </p>
                                    <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                        <Avatar className="size-12">
                                            <AvatarFallback>EL</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <cite className="text-sm font-medium">Eric Lin</cite>
                                            <span className="text-muted-foreground block text-sm">Owner, Lin’s Hardwood ⭐️⭐️⭐️⭐️⭐️</span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>

                        <Card className="card variant-mixed">
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p>
                                        In just 5 days, we had a professional site live — and leads have doubled since!
                                    </p>
                                    <div className="grid grid-cols-[auto_1fr] gap-3">
                                        <Avatar className="size-12">
                                            <AvatarFallback>MT</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium">Megan Torres</p>
                                            <span className="text-muted-foreground block text-sm">CEO, Torres Flooring Co. ⭐️⭐️⭐️⭐️⭐️</span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </section>
  );
}
