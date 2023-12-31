import Head from "next/head";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Places from "@/components/places/Places";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hyge Paradise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Hyge paradise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Places />
      <Footer bgcolor="black" topMargin="6em" />
    </>
  );
}
