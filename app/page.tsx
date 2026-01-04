import ContactForm from "@/components/ContactForm";
import Hero from "@/components/HeroSection";
import Quote from "@/components/Quote";
import Services from "@/components/WhatWeOffer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Quote />
      <ContactForm />
    </main>
  );
}
