import React from "react";
import styles from "./styles.module.scss";
const Contacts = () => {
  const date = new Date();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mess, setMess] = React.useState("");
  return (
    <div className={styles.wrapper}>
      <form className={styles.inputs}>
        <label htmlFor="name">_name:</label>
        <textarea
          maxLength={50}
          rows={2}
          cols={2}
          id="name "
          placeholder=""
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></textarea>
        <label htmlFor="email">_email:</label>
        <textarea
          maxLength={50}
          rows={2}
          cols={2}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          placeholder=""
        ></textarea>
        <label htmlFor="message">_message:</label>

        <textarea
          maxLength={400}
          name="reply"
          onChange={(e) => {
            setMess(e.target.value);
          }}
          id="message"
          className={styles.bigInput}
          placeholder=""
          rows={2}
          cols={2}
        ></textarea>
        <input type="submit" value="submit-message" />
      </form>

      <div className={styles.codeWrapper}>
        <div className={styles.code}>
          <div className={styles.text}>
            <span className="variable">const </span>
            <span className="vName">{" message = "}</span>
            <span>{"{ "}</span>
            <br></br>
            <span className="vValue">
              <span className="vName">name:</span> "{name}",<br></br>
              <span className="vName">email:</span> "{email}",<br></br>
              <span className="vName">message:</span> "{mess}",<br></br>
              <span className="vName">date:</span> "
              {date.getDate() +
                "/" +
                date.getMonth() +
                "/" +
                date.getFullYear()}
              "
            </span>
            <br></br>
            <span>{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
