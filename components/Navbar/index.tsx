import React from "react";
import { useRouter } from "next/router";
import styles from "./navbar.module.scss";

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
