import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


import PopupWidget from "../components/popupWidget";
import Stack from "../components/stack";
import Projects from "../components/projects";
import Recommendations from "../components/recommendations";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio Vanessa G.</title>
        <meta name="description" content="Portoflio of Vanessa G." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Stack />
      <Recommendations/>
        <Projects />
    



      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;