import ContactForm from "@/components/ContactForm";
import Hero from "@/components/HeroSection";
import Quote from "@/components/Quote";
import Services from "@/components/WhatWeOffer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-black min-h-screen w-full flex-col items-center justify-between">
      <Hero />
      <Services />
      <Quote />
      <ContactForm />
    </main>
  );
}
