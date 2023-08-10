import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AboutPanel from "../components/AboutPanel";
import Footer from "../components/Footer";
import CopyRightBar from "../components/CopyRightBar";
import ContactDetail from "../components/ContactDetail";
import Spinner from "../components/Spinner";
function Contact() {
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
          <Navbar />
          <Spinner />
        </div>
      ) : (
        <div>
          <Navbar />
          <AboutPanel title="Contact us" />
          <ContactDetail />
          <Footer />
          <CopyRightBar />
        </div>
      )}
    </div>
  );
}

export default Contact;
