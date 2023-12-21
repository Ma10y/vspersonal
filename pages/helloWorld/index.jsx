import React from "react";
import styles from "./hello.module.scss";
import Typewriter from "typewriter-effect";
// import Game from "@/components/Game";
import skills from "../../utils/skills";
const helloWorld = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoCon}>
        <div className={styles.personalInfo}>
          <Typewriter
            options={{
              delay: 40,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span><span class="variable">const</span><span class="vName"> name</span> =<span class="vValue"> "Nikita"</span><span></span></span><br></br><br></br><span><span class="variable">let</span><span class="vName"> status</span> =<span class="vValue"> "Looking for job"</span><span></span></span>'
                )
                .start()
                .callFunction(() => {
                  stop();
                });
            }}
          />
        </div>

        <div className={styles.linksCon}>
          <Typewriter
            options={{
              autoStart: false,
              delay: 40,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter

                .pauseFor(4500)
                .typeString(
                  '<span><span class="variable">let</span><span class="vName"> gitHub</span> =<a href="https://github.com/Ma10y"><span class="vValue"> "https://github.com/Ma10y"</span></a><br></br><span></span></span><span><span class="variable">let</span><span class="vName"> linkedIn </span> =<a href=" https://www.linkedin.com/in/ma10y/"><span class="vValue"> "https://www.linkedin.com/in/ma10y/"</span></a><span></span></span>'
                )

                .start()

                .callFunction(() => {
                  stop();
                });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default helloWorld;
