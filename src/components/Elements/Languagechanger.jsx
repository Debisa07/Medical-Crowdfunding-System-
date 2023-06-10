import React from "react";
import { useTranslation } from "react-i18next";
// import { useTranslation } from "react-i18next/hooks";


const LanguageChanger = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>En</button>
      <button onClick={() => changeLanguage("am")}>Am</button>
      {/* Add more buttons for other languages */}
    </div>
  );
};

export default LanguageChanger;
