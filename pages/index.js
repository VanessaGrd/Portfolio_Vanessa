import Head from "next/head";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

import PopupWidget from "../components/popupWidget";
import Projects from "../components/projects";
import Recommendations from "../components/recommendations";
import Stack from "../components/stack";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio Vanessa G.</title>
        <meta name="description" content="Portoflio of Vanessa G." />
        <link rel="icon" href="/favicon.ico" />
        {/* Script Axeptio */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.axeptioSettings = {
                clientId: "671a9087ebecbc5f46f0af74", 
              };

              (function(d, s) {
                var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                e.async = true; e.src = "//static.axept.io/sdk.js";
                t.parentNode.insertBefore(e, t);
              })(document, "script");
            `,
          }}
        />
      </Head>

      <Navbar />
      <Hero />
      <Stack />
      <Recommendations />
      <Projects />

      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
