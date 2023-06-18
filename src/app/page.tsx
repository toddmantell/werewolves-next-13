import { readFromDB } from "./db";

export default function Home() {
  const result = readFromDB();
  const numberOfCompletedGames =
    result.games &&
    result.games.reduce((accumulator, current) => {
      console.log(current);
      if (current?.finished && current.finished) return accumulator + 1;
      return accumulator;
    }, 0);

  return (
    <div>
      {"Number of Games Played:"}
      {numberOfCompletedGames}
    </div>
  );
}
