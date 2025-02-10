"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
// const locale = "da";
let locale = "da"; //because language will switch
console.log(texts);
//step1
const languageSwitcher = document.getElementById("languageSwitcher");
const elementsChange = document.getElementById(".header, .footer");

function switchLanguage() {
  texts[locale].texts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text;
    }
  });
}

// make variables///
// addEventListener("languagechange", (event.de) => {});
// onlanguagechange = (event) => {};

//step2
languageSwitcher.addEventListener("change", (event) => {
  locale = event.target.value;
  localStorage.setItem("selectedLanguage", locale);
  switchLanguage();
});

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    locale = savedLanguage;
    languageSwitcher.value = savedLanguage;
  }
  switchLanguage();
});
