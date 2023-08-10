import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import AnyIdea from "../components/AnyIdea";
import CopyRightBar from "../components/CopyRightBar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Subscribe from "../components/Subscribe";
import Spinner from "../components/Spinner";

function Home() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  });
  return (
    <div>
      {load ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          <Navbar />
          <Intro />
          <Service />
          <AnyIdea />
          <Subscribe />
          <Faq />
          <Footer />
          <CopyRightBar />
        </div>
      )}
    </div>
  );
}

export default Home;
