'use client';

import { useContext, useState } from "react";

import Image from "next/image";

import TranslationContext from "../../context/TranslationContext";
import "../../styles/scss/navbar.scss";

import AmexLogo from "../../public/images/amex.jpg";
import CenturionGif from "../../public/icons/centurion.gif";

const Navbar = () => {
  let languageSet;

  if (typeof window !== 'undefined') {
    languageSet = localStorage.getItem('language');
  }

  const { setLang } = useContext(TranslationContext);
  const [currentLang, setCurrentLang] = useState(languageSet)

  const languages = [
    {
      type: "en",
      text: "🇺🇸",
    },
    {
      type: "es",
      text: "🇪🇸",
    },
  ];

  const handleLanguageChange = (lang) => {
    setLang(lang);
    setCurrentLang(lang);
  }

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <Image
          src={CenturionGif}
          alt="Centurion American Express Logo"
          width={150}
          height={150}
          priority
        />
        <Image
          src={AmexLogo}
          alt="American Express Logo"
          width={100}
          height={100}
        />
      </a>
      <div className="lang-btn">
        {languages.map((language) => {
          if (currentLang !== language.type) {
            return (
              <button
                key={language.type}
                type="button"
                onClick={() => handleLanguageChange(language.type)}
              >
                {language.text}
              </button>
            );
          }
        })}
      </div>
    </nav>
  );
};

export default Navbar;
