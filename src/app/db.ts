const fs = require("fs");

type game = {
  id: number;
  players: Array<Object>;
  finished?: boolean;
};

type games = {
  games: Array<game>;
};

function writeToDB(): undefined {
  var fs = require("fs");

  var obj: games = {
    games: [],
  };

  obj.games.push({ id: 999, players: [{}] });

  var json = JSON.stringify(obj);

  const callback = () => console.log("file written");
  fs.writeFile("db.json", json, "utf8", callback);

  fs.readFile(
    "db.json",
    "utf8",
    function readFileCallback(err: Error, data: any) {
      if (err) {
        console.log(err);
      } else {
        console.log("writing...");
        obj = JSON.parse(data); //now it's an object
        obj.games.push({ id: 2, players: [{ name: "Todd" }] }); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile("db.json", json, "utf8", callback); // write it back
      }
    }
  );
}

function readFromDB(): games {
  const result = fs.readFileSync(
    "db.json",
    "utf8",
    function readFileCallback(err: Error, data: any) {
      if (err) {
        console.log(err);
      } else {
        const obj = JSON.parse(data); //now it's an object
        return obj && obj;
      }
    }
  );

  return result && JSON.parse(result);
}

export { writeToDB, readFromDB };
