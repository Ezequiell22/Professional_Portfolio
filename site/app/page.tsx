"use client";

import { useLanguage } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import CapabilityMap from "@/components/CapabilityMap";
import Intersection from "@/components/Intersection";
import Projects from "@/components/Projects";
import ProductApproach from "@/components/ProductApproach";
import DecisionFramework from "@/components/DecisionFramework";
import Experience from "@/components/Experience";
import Legacy from "@/components/Legacy";
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
        <Positioning t={t} />
        <CapabilityMap t={t} />
        <Intersection t={t} />
        <Projects t={t} />
        <ProductApproach t={t} />
        <DecisionFramework t={t} />
        <Experience t={t} />
        <Legacy t={t} />
        <TechStack t={t} />
        <Cta t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
