import React from "react";
import styles from "./styles.module.scss";
const Contacts = () => {
  const date = new Date();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mess, setMess] = React.useState("");
  const [state, setState] = React.useState(0);
  function change() {
    setState(0);
  }
  return (
    <div className={styles.wrapper}>
      {state ? (
        <div className={styles.thanksWrapper}>
          <h1>Thank you!🤘</h1>
          <span>
            Your message has been accepted. <br></br>You will recieve answer
            really soon!
          </span>
          <button
            onClick={() => {
              setState(0);
              setName("");
              setEmail("");
              setMess("");
            }}
          >
            send-new-message
          </button>
        </div>
      ) : (
        <form onSubmit={() => setState(1)} className={styles.inputs}>
          <label htmlFor="name">_name:</label>
          {/* <textarea
          spellCheck={false}
          maxLength={50}
          id="name "
          placeholder=""
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></textarea> */}
          <input
            required={true}
            spellCheck={"false"}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
            type={"text"}
          />
          <label htmlFor="email">_email:</label>
          {/* <textarea
          spellCheck={false}
          maxLength={50}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          id="email"
          placeholder=""
        ></textarea> */}
          <input
            required={true}
            spellCheck={"false"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            type={"email"}
          />
          <label htmlFor="message">_message:</label>

          <textarea
            required={true}
            spellCheck={false}
            maxLength={400}
            onChange={(e) => {
              setMess(e.target.value);
            }}
            id="message"
            className={styles.bigInput}
            placeholder=""
          ></textarea>
          <input type="submit" value="submit-message" />
        </form>
      )}

      <div className={styles.codeWrapper}>
        <div className={styles.code}>
          <div className={styles.text}>
            <span className="variable">const </span>
            <span className="vName">{" message = "}</span>
            <span>{"{ "}</span>
            <br></br>
            <span className="vValue">
              <span className="vName"> {"\xa0\xa0 name:"}</span> "{name}",
              <br></br>
              <span className="vName"> {"\xa0\xa0 email:"}</span> "{email}",
              <br></br>
              <span className="vName"> {"\xa0\xa0 message:"}</span> "{mess}",
              <br></br>
              <span className="vName"> {"\xa0\xa0 date:"}</span> "
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
