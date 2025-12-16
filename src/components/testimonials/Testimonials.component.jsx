import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TestimonialCard from "./core/Testimonial-card.component";
import testimonials from "./data/testimonials";

export default function Testimonials() {

  // Duplicate content to create seamless loop. 
  // We need enough width. Just duplicating the array once is enough if we use translation to -50% for infinite scroll.
  // Effectively: The track contains [Items] + [Items Duplicate]. 
  // We scroll from 0 to -50% (which is the end of the first set), then jump back to 0.
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="mb-32 overflow-hidden bg-primary/5 py-24 relative group">
      {/* Blurred Blobs for background appeal */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 px-4">
        <h2 className="text-gray-500 uppercase tracking-[0.2em] mb-2 font-medium">Testimonials</h2>
        <h1 className="text-4xl md:text-5xl font-nura text-primary">Voices of Trust</h1>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">See what our partners have to say about their journey with us.</p>
      </div>

      <div className="flex flex-col gap-8 mask-linear">
        {/* Scroll Container with padding to prevent shadow clipping */}
        <div className="w-full overflow-hidden flex py-12">
          <div className="flex w-max animate-scroll group-hover:paused">
            {allTestimonials.map((t, i) => (
              <TestimonialCard key={`test-${i}`} {...t} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
