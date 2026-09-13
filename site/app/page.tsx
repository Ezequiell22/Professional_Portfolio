"use client";

import { useLanguage } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Work from "@/components/Work";
import Approach from "@/components/Approach";
import DecisionFramework from "@/components/DecisionFramework";
import Background from "@/components/Background";
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
        <WhatIDo t={t} />
        <Work t={t} />
        <Approach t={t} />
        <DecisionFramework t={t} />
        <Background t={t} />
        <TechStack t={t} />
        <Cta t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
