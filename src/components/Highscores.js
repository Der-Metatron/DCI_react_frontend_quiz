import React, { useEffect, useState } from "react";
import axios from "axios";
/*  import "./Highscores.css";*/
import { useQuizContext } from "../contexts/QuizContext";

export const Highscores = () => {
  const [highscores, setHighscores] = useState([]);
  const { quizFinished, totalPoints, setPoints } = useQuizContext();
  const [userHighScore, setUserHighScore] = useState({ player: "", points: 0 });
  const [highScoreSaved, setHighScoreSaved] = useState(false);

  useEffect(() => {
    const loadHighscore = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/highscores`
        );
        const sortedScores = [...response.data];

        sortedScores.sort((a, b) => {
          if (a.points > b.points) return -1;
          else if (a.points < b.points) return 1;
          else {
            if (a.player > b.player) return 1;
            else return -1;
          }
        });
        setHighscores(sortedScores);
      } catch (err) {
        console.log(err);
      }
    };
    loadHighscore();
  }, []);
  useEffect(() => {
    console.log({ userHighScore });
  }, [userHighScore]);

  const saveHighscore = async () => {
    if (userHighScore.player)
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_HOST}/highscores`,
          userHighScore
        );
        console.log(response);
        setHighScoreSaved(true);
      } catch (error) {
        console.log(error);
      }
  };

  // -Ausgabe am Bildschirm
  return (
    <main className="highscores__container">
      <h2>Highscores</h2>

      <table className="highscores__table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {highscores.map((highscore, index) => (
            <tr key={`hs-${index}`}>
              <td>{index + 1}</td>
              <td>{highscore.player}</td>
              <td>{highscore.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {quizFinished === true && !highScoreSaved ? (
        <div>
          {`Du hast ${totalPoints} Punkte erreicht.`}
          <br />
          {"TÄÄTTÄÄ !!!! Highscore:"}
          <br />
          <input
            type="text"
            defaultValue=""
            placeholder="Name"
            minLength={2}
            onChange={(e) => {
              setUserHighScore({ player: e.target.value, points: totalPoints });
            }}
          />
          <button onClick={() => saveHighscore()}>Speichern</button>
        </div>
      ) : undefined}
    </main>
  );
};
