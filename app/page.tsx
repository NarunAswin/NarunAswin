import { Navbar } from "@/components/sweets/navbar";
import { Hero } from "@/components/sweets/hero";
import { WhyUs } from "@/components/sweets/why-us";
import { SweetsGrid } from "@/components/sweets/sweets-grid";
import { Testimonials } from "@/components/sweets/testimonials";
import { Footer } from "@/components/sweets/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <SweetsGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
