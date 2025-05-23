import React, { useEffect } from "react";
import Showcase from "../components/Showcase";
import About from "../components/About";
import Video from "../components/Video";
import Comments from "../components/Comments";
import Insect from "../components/Insect";
import { useScrollContext } from "../context/ScrollContext";
import { useScroll } from "../hooks/useScroll";
import Services from "../components/Services";

const Home = () => {
  const { scroll, commentRef, aboutRef, serviceRef, insectRef } =
    useScrollContext();

  const obj = {
    comment: commentRef,
    about: aboutRef,
    service: serviceRef,
    insect: insectRef,
  };

  useEffect(() => {
    useScroll(obj[scroll]);
  }, [scroll]);

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16648129567/1qmYCMSkisQZEJ-YuYI-",
      });
    }
  }, []);

  return (
    <div>
      <Showcase />
      <Services />
      <Video />
      <Comments />
      <Insect />
      <About />
    </div>
  );
};

export default Home;
