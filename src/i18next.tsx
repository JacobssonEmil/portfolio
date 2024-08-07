import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const initI18n = () => {
  return i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      detection: {
        order: [
          "querystring",
          "localStorage",
          "cookie",
          "navigator",
          "htmlTag",
          "path",
          "subdomain",
        ],
        caches: ["localStorage", "cookie"],
        lookupCookie: "i18next",
        cookieMinutes: 10,
        cookieDomain: "myDomain",
      },
      resources: {
        en: {
          translation: {
            // Navbar links
            About: "About",
            Education: "Education",
            Projects: "Projects",
            "Technologies and Tools": "Technologies and Tools",
            Contact: "Contact",
            // Social media and contact links
            Linkedin: "Linkedin",
            Github: "Github",
            Email: "Email",
            // About Page
            "About Introduction": "Full-Stack Developer",
            "About Description":
              "I am a passionate fullstack developer from Sweden, who enjoys creating responsive and user-friendly applications. Always eager to learn new technologies and apply them in projects.",
            // Education Page
            "Education Title": "Education",
            "Bachelor Program in Software Development":
              "Bachelor Program in Software Development",
            "Technology Program": "Technology Program",
            "University Kristianstad": "Kristianstad University",
            "NTI High School": "NTI Gymnasiet",
            // Project Page
            "Projects Title": "Projects",
            "Medlemma Title": "Medlemma",
            "Medlemma Description":
              "An android app made for a Junior Achievement corporation. The app organizes and displays your store memberships on mobile.",
            "Smart Home Title": "Smart Home",
            "Smart Home Description":
              "A website and app for remote control of a prototype house, managing lighting, windows, security, and sensors via an intuitive interface.",
            "Portfolio Title": "Portfolio",
            "Portfolio Description":
              "A portfolio website featuring sections for about me, education, projects, and skills, designed to showcase and highlight my work.",
            "BookDB Title": "BookDB",
            "BookDB Description":
              "An app to help you track books, manage a wishlist, view reading stats, and scan ISBN barcodes for details from Google Books.",
            // Project Page Modals
            "Smart Home Modal Title": "Smart Home",
            "Smart Home Modal Description":
              "A website and mobile app for remotely controlling devices in a prototype house. Users can access an intuitive interface to control the house’s lighting, windows, and security systems, as well as to monitor sensor information from the house. The system facilitates two-way communication, allowing data to be sent from the application to the smart house as well as reading and sending sensor data back to the app, all from one single location.",
            "Portfolio Modal Title": "Portfolio",
            "Portfolio Modal Description":
              "A portfolio website designed to showcase my work, featuring sections for about me, education, projects, and skills. Built as a single-page application (SPA) using JavaScript, React, and Chakra UI, it offers a seamless, interactive experience.",
            "Medlemma Modal Title": "Medlemma",
            "Medlemma Modal Description":
              "An app for managing your store memberships. With this app, users can easily collect, organize, and manage all their memberships in various stores efficiently. Users can also smoothly display their membership cards directly from their mobile when needed.",
            "BookDB Modal Title": "BookDB",
            "BookDB Modal Description":
              "The app provides a platform for documenting books you have read, managing a personal wishlist, and gaining insights through statistics on genres and reading habits; it also includes the ability to scan ISBN numbers to fetch book information from both the Google Books API and the National Library of Sweden API.",

            // Skills Page
            "Skills and Technologies Title": "Skills and Technologies",
            "Skills 1":
              "⭐ Building responsive web applications (SPA) in React.js.",
            "Skills 2":
              "⭐ Building mobile applications in Kotlin and Jetpack Compose.",
            "Skills 3": "⭐ Building APIs in JavaScript and Node.js.",
            // Footer Page
            "Contact me directly at": "Contact me directly at",
            "All rights reserved": "All rights reserved.",
            // Experience Page
            "Experience title": "Experience",
            "Full-stack developer date": "Aug 2024 - present",
          },
        },
        sv: {
          translation: {
            // Navbar links
            About: "Om",
            Education: "Utbildning",
            Projects: "Projekt",
            "Technologies and Tools": "Teknologier och Verktyg",
            Contact: "Kontakt",
            // Social media and contact links
            Linkedin: "Linkedin",
            Github: "Github",
            Email: "E-post",
            // About Page
            "About Introduction": "Fullstack Utvecklare",
            "About Description":
              "Jag är en passionerad fullstack-utvecklare från Sverige som gillar att skapa responsiva och användarvänliga applikationer. Alltid ivrig att lära mig nya teknologier och tillämpa dem i projekt.",
            // Education Page
            "Education Title": "Utbildning",
            "Bachelor Program in Software Development":
              "Kandidatexamen i datavetenskap",
            "Technology Program": "Teknikprogrammet",
            "University Kristianstad": "Högskolan Kristianstad",
            "NTI High School": "NTI Gymnasiet",
            // Project Page
            "Projects Title": "Projekt",
            "Medlemma Title": "Medlemma",
            "Medlemma Description":
              "En Android-app gjord för ett Ung Företagsamhet-företag. Appen organiserar och visar dina butikmedlemskap på mobilen.",
            "Smart Home Title": "Smart Hem",
            "Smart Home Description":
              "En webbplats och app för fjärrstyrning av ett prototyphus, som hanterar belysning, fönster, säkerhet och sensorer via ett intuitivt gränssnitt.",
            "Portfolio Title": "Portfölj",
            "Portfolio Description":
              "En portföljsida med sektioner för om mig, utbildning, projekt och färdigheter, utformad för att visa och framhäva mitt arbete.",
            "BookDB Title": "BookDB",
            "BookDB Description":
              "En app för att hjälpa dig att hålla koll på böcker, hantera en önskelista, se lässtatistik och skanna ISBN sträckkoder för detaljer från Google Books.",
            // Project Page Modals
            "Smart Home Modal Title": "Smart Hem",
            "Smart Home Modal Description":
              "En webbplats och mobilapp för fjärrstyrning av enheter i ett prototyp hus. Användare kan komma åt ett intuitivt gränssnitt för att kontrollera husets belysning, fönster och säkerhetssystem samt övervaka sensordata från huset. Systemet underlättar tvåvägskommunikation, vilket gör det möjligt att skicka data från applikationen till smarta huset samt läsa och skicka sensordata tillbaka till appen, allt från en enda plats.",
            "Portfolio Modal Title": "Portfölj",
            "Portfolio Modal Description":
              "En portföljsida utformad för att visa mitt arbete, med sektioner för om mig, utbildning, projekt och färdigheter. Byggd som en single-page application (SPA) med JavaScript, React och Chakra UI, erbjuder den en sömlös, interaktiv upplevelse.",
            "Medlemma Modal Title": "Medlemma",
            "Medlemma Modal Description":
              "En app för att hantera dina butiksmedlemskap. Med denna app kan användare enkelt samla in, organisera och hantera alla sina medlemskap i olika butiker effektivt. Användare kan också smidigt visa sina medlemskort direkt från mobilen vid behov.",
            "BookDB Modal Title": "BookDB",
            "BookDB Modal Description":
              "Appen erbjuder en plattform för att dokumentera böcker du har läst, hantera en personlig önskelista och få insikter genom statistik över genrer och läsvanor; den inkluderar även möjligheten att skanna ISBN-nummer för att hämta bokinformation från både Google Books API och Sveriges Nationalbiblioteks API.",

            // Skills Page
            "Skills and Technologies Title": "Färdigheter och Tekniker",
            "Skills 1":
              "⭐ Bygger responsiva webbapplikationer (SPA) i React.js.",
            "Skills 2":
              "⭐ Bygger mobilapplikationer i Kotlin och Jetpack Compose.",
            "Skills 3": "⭐ Bygger API:er i JavaScript och Node.js.",
            // Footer Page
            "Contact me directly at": "Kontakta mig direkt på",
            "All rights reserved": "Alla rättigheter förbehållna.",
            // Experience Page
            "Experience title": "Erfarenhet",
            "Full-stack developer date": "Aug 2024 - nutid",
          },
        },
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
};

export default initI18n;
