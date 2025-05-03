import Image from 'next/image'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-10 md:py-20">
      <div className="mx-auto max-w-5xl space-y-6 px-4 sm:px-6 md:space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-3xl md:text-3xl font-semibold lg:text-4xl">
            Recent Flooring Website Launches
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Check Out Our Fast, High-Performing Flooring Websites
          </p>
        </div>

        {/* First Portfolio Item */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 lg:gap-16">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md bg-linear-to-b aspect-[76/59] relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/images/portfolio-flooring-1.webp"
                className="hidden rounded-[15px] dark:block w-full h-auto object-cover"
                alt="Hardwood Flooring Website dark"
                width={600}
                height={450}
              />
              <Image
                src="/images/portfolio-flooring-1.webp"
                className="rounded-[15px] shadow dark:hidden w-full h-auto object-cover"
                alt="Hardwood Flooring Website light"
                width={600}
                height={450}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3 sm:space-y-4">
            <p className="text-muted-foreground text-base sm:text-lg">
              FloorZone Co. <span className="text-accent-foreground font-bold">Modern, mobile-optimized website</span> — from products innovate.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg">
              A modern, mobile-optimized website designed to showcase premium hardwood flooring services, drive quote requests, and boost organic traffic.
            </p>
            <div className="pt-4 sm:pt-6">
              <blockquote className="border-l-4 pl-3 sm:pl-4 text-sm sm:text-base">
                <p>
                  Brllo's team delivered a clean, SEO-optimized site in record time. We’ve doubled our quote requests and now appear on page one of Google for local flooring searches.
                </p>
                <div className="mt-4 space-y-2">
                  <cite className="block font-medium not-italic">Dan Miller, Owner</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Second Portfolio Item */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-6 md:gap-12 lg:gap-16">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md bg-linear-to-b aspect-[76/59] relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/images/portfolio-flooring-2.webp"
                className="hidden rounded-[15px] dark:block w-full h-auto object-cover"
                alt="Tile Installation Website dark"
                width={600}
                height={450}
              />
              <Image
                src="/images/portfolio-flooring-2.webp"
                className="rounded-[15px] shadow dark:hidden w-full h-auto object-cover"
                alt="Tile Installation Website light"
                width={600}
                height={450}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3 sm:space-y-4">
            <p className="text-muted-foreground text-base sm:text-lg">
              Floor Masters <span className="text-accent-foreground font-bold">Built for conversion</span> — from products innovate.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg">
              Built for conversion, this site features project galleries, streamlined contact forms, and local SEO enhancements tailored for tile installation services.
            </p>
            <div className="pt-4 sm:pt-6">
              <blockquote className="border-l-4 pl-3 sm:pl-4 text-sm sm:text-base">
                <p>
                  The new site makes our work shine. Calls have increased, and the gallery feature lets customers instantly see our quality. Brllo nailed it.
                </p>
                <div className="mt-4 space-y-2">
                  <cite className="block font-medium not-italic">Blake Johnson, Founder</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
