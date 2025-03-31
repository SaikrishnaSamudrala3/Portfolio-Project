"use client";


import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

export default function Home() {


  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  }, [])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <>
    <Navbar isDarkMode={isDarkMode}  setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode}  setIsDarkMode={setIsDarkMode}/>
    <About  isDarkMode={isDarkMode}  setIsDarkMode={setIsDarkMode}/>
    <Services isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Work isDarkMode={isDarkMode}  setIsDarkMode={setIsDarkMode}/>
    <Contact isDarkMode={isDarkMode}  setIsDarkMode={setIsDarkMode}/>
    <Footer isDarkMode={isDarkMode}  setIsDarkMode={setIsDarkMode}/>
    </>
  );
}
