import React from "react";

//  COMPONENTS
import Services from "components/Services";
import Search from "components/Search";
import Map from "components/Map";
import About from "components/About";

function Home() {
  return (
    <div>
      <About />
      <Services />
      <Search />
      <Map />
    </div>
  );
}

export default Home;
