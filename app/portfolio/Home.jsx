"use client";
import Image from "next/image";
import Header from "./Header";
import "./variables.css";
import Presentation from "./Presentation";
import About from "./About";
import Education from "./Education";
import { useState } from "react";


export default function Home() {

  return (
    <div className="home">
      <Header />
      <Presentation />
      <About />
      <Education />
    </div>
  );
}
