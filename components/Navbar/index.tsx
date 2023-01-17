import React from "react";
import { useRouter } from "next/router";
import styles from "./navbar.module.scss";
import { SiTypescript, SiReact, SiSass } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import { DiTerminal } from "react-icons/di";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.navWrapper}>
        <div className={styles.logo}>
          <span>root@Ma10y:~/Home</span>
        </div>

        <div
          onClick={() =>
            router.push(`/helloWorld`, undefined, { shallow: true })
          }
        >
          <div
            className={
              router.pathname == "/helloWorld"
                ? `${styles.active} ${styles.navItem}`
                : styles.navItem
            }
          >
            <SiReact
              className={styles.navIcon}
              color="#00D1F2"
              size="20px"
            ></SiReact>
            <span>__Hello_World</span>
          </div>
        </div>

        <div
          onClick={() => router.push(`/aboutMe`, undefined, { shallow: true })}
        >
          <div
            className={
              router.pathname == "/aboutMe"
                ? `${styles.active} ${styles.navItem}`
                : styles.navItem
            }
          >
            <IoLogoSass
              className={styles.navIcon}
              color="#C36291"
              size="25px"
            ></IoLogoSass>
            <span>__About_Me</span>
          </div>
        </div>

        <div
          onClick={() =>
            router.push(`/projects`, undefined, { shallow: false })
          }
        >
          <div
            className={
              router.pathname == "/projects"
                ? `${styles.active} ${styles.navItem}`
                : styles.navItem
            }
          >
            <FaFolder
              className={styles.navIcon}
              color="#FFCA28"
              size="20px"
            ></FaFolder>
            <span>__Projects</span>
          </div>
        </div>

        <div className={styles.navItemContacts}>
          <div
            onClick={() =>
              router.push(`/contacts`, undefined, { shallow: true })
            }
            className={
              router.pathname == "/contacts"
                ? `${styles.active} ${styles.link}`
                : styles.link
            }
          >
            <DiTerminal
              className={styles.navIcon}
              color="#007ACC"
              size="25px"
            ></DiTerminal>
            <span>__Contacts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
