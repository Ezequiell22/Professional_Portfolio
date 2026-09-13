"use client";

import { useLanguage } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Thinking from "@/components/Thinking";
import ProductApproach from "@/components/ProductApproach";
import CapabilityMap from "@/components/CapabilityMap";
import Intersection from "@/components/Intersection";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import LanguageMeta from "@/components/LanguageMeta";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <LanguageMeta />
      <Navigation t={t} />
      <main>
        <Hero t={t} />
        <Projects t={t} />
        <Thinking t={t} />
        <ProductApproach t={t} />
        <CapabilityMap t={t} />
        <Intersection t={t} />
        <Experience t={t} />
        <TechStack t={t} />
        <Cta t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
