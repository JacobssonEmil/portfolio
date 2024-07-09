import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const initI18n = () => {
  return i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      detection: {
        order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
        caches: ['localStorage', 'cookie'],
        lookupCookie: 'i18next',
        cookieMinutes: 10,
        cookieDomain: 'myDomain',
      },
      resources: {
        en: {
          translation: {
           // Navbar links
            "About": "About",
            "Education": "Education",
            "Projects": "Projects",
            "Technologies and Tools": "Technologies and Tools",
            "Contact": "Contact",
            // Social media and contact links
            "Linkedin": "Linkedin",
            "Github": "Github",
            "Email": "Email",
            // About Page
            "About Introduction": "I am a passionate fullstack developer from Sweden, who enjoys creating responsive and user-friendly applications. Always eager to learn new technologies and apply them in projects.",
            // Education Page
            "Education Title": "Education",
            "Bachelor Program in Software Development": "Bachelor Program in Software Development",
            "Technology Program": "Technology Program",
            "University Kristianstad": "Kristianstad University, Kristianstad",
            "NTI High School": "NTI Gymnasiet, Helsingborg",
            // Project Page
            "Projects Title": "Projects",
            "Medlemma Title": "Medlemma",
            "Medlemma Description": "An app to manage your store memberships.",
            "Smart Home Title": "Smart Home",
            "Smart Home Description": "A website and mobile app for remotely controlling devices in a prototype house.",
            "Portfolio Title": "Portfolio",
            "Portfolio Description": "A portfolio website designed to showcase my projects.",
            // Project Page Modals
            "Smart Home Modal Title": "Smart Home",
            "Smart Home Modal Description": "A website and mobile app for remotely controlling devices in a prototype house. Users can access an intuitive interface to control the house’s lighting, windows, and security systems, as well as to monitor sensor information from the house. The system facilitates two-way communication, allowing data to be sent from the application to the smart house as well as reading and sending sensor data back to the app, all from one single location.",
            "Portfolio Modal Title": "Portfolio",
            "Portfolio Modal Description": "A portfolio website designed to showcase my projects.",
            "Medlemma Modal Title": "Medlemma",
            "Medlemma Modal Description": "An app for managing your store memberships. With this app, users can easily collect, organize, and manage all their memberships in various stores efficiently. Users can also smoothly display their membership cards directly from their mobile when needed.",
            // Skills Page
            "Technologies and Tools Title": "Technologies and Tools",
            "Skills 1": "⭐ Building responsive web applications (SPA) in React.js.",
            "Skills 2": "⭐ Building mobile applications in Kotlin and Jetpack Compose.",
            "Skills 3": "⭐ Building APIs in JavaScript and Node.js.",
            // Footer Page
            "Contact me directly at": "Contact me directly at",
              "All rights reserved": "All rights reserved.",
          },
        },
        sv: {
          translation: {
             // Navbar links
            "About": "Om",
            "Education": "Utbildning",
            "Projects": "Projekt",
            "Technologies and Tools": "Teknologier och Verktyg",
            "Contact": "Kontakt",
            // Social media and contact links
            "Linkedin": "Linkedin",
            "Github": "Github",
            "Email": "E-post",
            // About Page
            "About Introduction": "Jag är en passionerad fullstack-utvecklare från Sverige som gillar att skapa responsiva och användarvänliga applikationer. Alltid ivrig att lära mig nya teknologier och tillämpa dem i projekt.",
            // Education Page
            "Education Title": "Utbildning",
            "Bachelor Program in Software Development": "Kandidatexamen i datavetenskap",
            "Technology Program": "Teknik Programmet",
            "University Kristianstad": "Högskolan Kristianstad, Kristianstad",
            "NTI High School": "NTI Gymnasiet, Helsingborg",
            // Project Page
            "Projects Title": "Projekt",
            "Medlemma Title": "Medlemma",
            "Medlemma Description": "En app för att hantera dina butiksmedlemskap.",
            "Smart Home Title": "Smart Hem",
            "Smart Home Description": "En webbplats och mobilapp för fjärrstyrning av enheter i ett prototyp hus.",
            "Portfolio Title": "Portfölj",
            "Portfolio Description": "En portföljwebbplats designad för att visa mina projekt.",
            // Project Page Modals
            "Smart Home Modal Title": "Smart Hem",
            "Smart Home Modal Description": "En webbplats och mobilapp för fjärrstyrning av enheter i ett prototyp hus. Användare kan komma åt ett intuitivt gränssnitt för att kontrollera husets belysning, fönster och säkerhetssystem samt övervaka sensordata från huset. Systemet underlättar tvåvägskommunikation, vilket gör det möjligt att skicka data från applikationen till smarta huset samt läsa och skicka sensordata tillbaka till appen, allt från en enda plats.",
            "Portfolio Modal Title": "Portfölj",
            "Portfolio Modal Description": "En portföljwebbplats designad för att visa mina projekt.",
            "Medlemma Modal Title": "Medlemma",
            "Medlemma Modal Description": "En app för att hantera dina butiksmedlemskap. Med denna app kan användare enkelt samla in, organisera och hantera alla sina medlemskap i olika butiker effektivt. Användare kan också smidigt visa sina medlemskort direkt från mobilen vid behov.",
            // Skills Page
            "Technologies and Tools Title": "Teknologier och Verktyg",
            "Skills 1": "⭐ Bygger responsiva webbapplikationer (SPA) i React.js.",
            "Skills 2": "⭐ Bygger mobilapplikationer i Kotlin och Jetpack Compose.",
            "Skills 3": "⭐ Bygger API:er i JavaScript och Node.js.",
            // Footer Page
            "Contact me directly at": "Kontakta mig direkt på",
            "All rights reserved": "Alla rättigheter förbehållna.",

          },
        },
      },
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
};

export default initI18n;
