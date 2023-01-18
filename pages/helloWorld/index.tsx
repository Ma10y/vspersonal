import React from "react";
import styles from "./hello.module.scss";
import Typewriter from "typewriter-effect";
import Game from "@/components/Game";
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

          {/* <span>
            <span className="variable">const</span>
            <span className="vName"> userName</span> =
            <span className="vValue"> "Nikita"</span>
            <span></span>
          </span>
          <br></br>
          <span>
            <span className="func">while</span>
            <span className="func">(</span>
            <span>true</span>
            <span className="func">)</span>
            <br></br>
            <span className="func">{"{"}</span>
            <br></br>

            <span className="vName">
              <span> ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎</span>coding
            </span>
            <span className="func">()</span>
            <br></br>

            <span className="func">{"}"}</span>
          </span>
          <br></br>
          <span>
            <span className="variable">let</span>
            <span className="vName"> status</span> =
            <span className="vValue"> "Looking for job"</span>
            <span></span>
          </span> */}
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
                  '<span><span class="variable">let</span><span class="vName"> gitHub</span> =<a href="https://github.com/Ma10y"><span class="vValue"> "https://github.com/Ma10y"</span></a><br></br><span></span></span><span><span class="variable">let</span><span class="vName"> linkedIn</span> =<a href="https://www.linkedin.com/in/ma10y/"><span class="vValue">"https://www.linkedin.com/in/ma10y/"</span></a><span></span></span>'
                )

                .start()

                .callFunction(() => {
                  stop();
                });
            }}
          />
        </div>
      </div>
      <div className={styles.smthCon}>
        <Game></Game>
      </div>
    </div>
  );
};

export default helloWorld;
