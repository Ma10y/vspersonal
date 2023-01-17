import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./game.module.scss";
import ReactCSSTransitionGroup from "react-transition-group";
const Game = () => {
  const cardImages = [
    { src: "/cards/nest-middleware-js-svgrepo-com.svg", matched: false },
    { src: "/cards/next-js-svgrepo-com.svg", matched: false },
    { src: "/cards/scss2-svgrepo-com.svg", matched: false },
    { src: "/cards/react-svgrepo-com.svg", matched: false },
    { src: "/cards/typescript-official-svgrepo-com.svg", matched: false },
    { src: "/cards/redux-svgrepo-com.svg", matched: false },
  ];

  const [activeSkills, setActiveSkills] = useState([]);

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleChoice = (card: any) => {
    if (disabled === false) {
      if (choiceOne) {
        setChoiceTwo(card);
      } else {
        setChoiceOne(card);
      }
    }
  };

  const resetTurn = () => {
    setChoiceTwo(null);
    setChoiceOne(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setActiveSkills([]);
    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.src === choiceOne.src) {
              setActiveSkills([
                ...activeSkills,
                { skill: choiceOne, visibility: false },
              ]);
              setTimeout(() =>
                setActiveSkills([
                  ...activeSkills,
                  { skill: choiceOne, visibility: true },
                ])
              );
              console.log(activeSkills);
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const checkFlip = (card) => {
    if (card == choiceOne || card == choiceTwo || card.matched) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <h3>const MySkills: </h3>
        <div className={styles.skillsCon}>
          {activeSkills.map((card) => (
            <div
              className={
                card.visibility ? styles.skillsCon : styles.skillsConHidden
              }
            >
              <Image
                width={60}
                height={60}
                className={styles.skill}
                alt="card front"
                src={card.skill.src}
                onClick={() => console.log(card)}
              ></Image>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <div className={styles.card} key={card.id}>
              <div
                className={checkFlip(card) ? styles.flipped : styles.unflipped}
              >
                <Image
                  width={50}
                  height={50}
                  className={styles.front}
                  alt="card front"
                  src={card.src}
                ></Image>
                <Image
                  width={50}
                  height={50}
                  className={styles.back}
                  alt="card back"
                  src={"/cards/folder-svgrepo-com.svg"}
                  onClick={() => handleChoice(card)}
                ></Image>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
