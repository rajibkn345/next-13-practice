import React from "react";
import Link from "next/link";
import AboutPage from "./about/page";
const HomePage = () => {
  return (
    <div>
      <h2>Welcome to Rajib's Crash Course</h2>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>
            <AboutPage />
          </Link>
        </li>
        <li>
          <Link href={"/about/team"}>TeamPage</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
