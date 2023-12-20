import React, { useState } from "react";
import styles from "./index.module.css";
const Background = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  const [isWinner, setIsWinner] = useState(false);
  const [isTie, setIsTie] = useState(false); // Yeni durum: beraberlik kontrolü

  const ClickHandler = (i) => {
    if (data[i] === "" && !isWinner && !isTie) {
      const newBoard = [...data];
      newBoard[i] = player ? "X" : "O";
      setData([...newBoard]);
      CheckWin(newBoard);
    }
  };

  const CheckWin = (arr) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (arr[a] === arr[b] && arr[b] === arr[c] && arr[a] !== "") {
        setIsWinner(true);
        return;
      }
    }

    // Oyunun berabere olduğunu kontrol et
    if (!arr.includes("") && !isWinner) {
      setIsTie(true);
    }

    setPlayer(!player);
  };

  const ResetClick = () => {
    setIsWinner(false);
    setIsTie(false); // Oyunu sıfırlarken beraberlik durumunu da sıfırla
    setData(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.divflex}>
          {data?.map((item, i) => (
            <div onClick={() => ClickHandler(i)} className={styles.divcontrol}>
              {item}
            </div>
          ))}
          <div>
            {isWinner ? (
              <>
                <div className={styles.overlay}></div>
                <div className={styles.backgroundcontrol}>
                  <div className={styles.texts}>
                    <h2>{player ? "Winner X" : "Winner O"}</h2>
                    <button onClick={ResetClick}>Again Play</button>
                  </div>
                </div>
              </>
            ) : isTie ? ( // Beraberlik durumu kontrolü
              <>
                <div className={styles.overlay}></div>
                <div className={styles.backgroundcontrol}>
                  <div className={styles.texts}>
                    <h2>It's a Tie!</h2>
                    <button onClick={ResetClick}>Play Again</button>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Background;
