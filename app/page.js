import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";
import Bloglist from "./components/Bloglist";
export default function Home() {
  return (
      <>
        <Navbar/>
        <Hero/>
        <Bloglist/>
        <Footer/>
      </>
  )
}