import React from "react";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div>
      <div className="fixed top-0 w-full bg-[var(--ielts-background)] z-50 left-0 right-0 border-none md:border-b">
        <Navbar />
      </div>
      <div className="pt-16"></div>
    </div>
  );
};

export default Homepage;
