import React from "react";
import Section from "./Section";
function Home() {
  return (
    <>
      <Section Lr1="Hello!" Lr2="I'm Jenny" Lr3="frontend developer" />
      <Section
        Lr2="About Me"
        Lr4="a"
        R1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptate itaque necessitatibus saepe, totam, excepturi aspernatur non voluptas ipsa molestias beatae exercitationem, omnis nesciunt numquam mollitia aliquid voluptates quaerat repudiandae?"
      />
      <Section Lr2="Projects" Lr4="a" />
      <Section Lr2="Contact" />
    </>
  );
}

export default Home;
