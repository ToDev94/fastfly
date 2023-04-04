import Head from "next/head";
import Navigation from "../../components/Navigation";
import ClientsSection from "../../components/sections/ClientsSection";
import ContactUs from "../../components/sections/ContactUs";
import DiscoverSection from "../../components/sections/DiscoverSection";

import HeroSection from "../../components/sections/HeroSection";
import ToursSection from "../../components/sections/ToursSection";
import FooterSection from "../../components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fastfly--Travel Agency</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <ToursSection />
        <DiscoverSection />
        <ClientsSection />
        <ContactUs />
        <FooterSection />
      </main>
    </>
  );
}
