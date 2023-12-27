"use client";
import { Button } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          BP
        </a>
        <div className="lang">
          <ul>
            <li
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              EN
            </li>
            <li
              onClick={() => {
                i18n.changeLanguage("pt");
              }}
            >
              PT
            </li>
            <li
              onClick={() => {
                i18n.changeLanguage("it");
              }}
            >
              IT
            </li>
          </ul>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <a href="#projects" className={styles.li}>
                {t("header.projects")}
              </a>
            </li>
            <li>
              <a href="#about" className={styles.li}>
                {t("header.about")}
              </a>
            </li>
            <li id={styles.contato}>
              <button className={styles.btn}>
                <a href="#contact">{t("header.contact")}</a>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.section}>
        <p>
          I AM
          <br />
          <span className={styles.name}>BRUNO POSTAI</span>
          <br /> FRONT-END DEVELOPER
        </p>
      </section>
    </div>
  );
};

export default Header;

/* onClick={() => {
  i18n.changeLanguage("pt");
}} */
