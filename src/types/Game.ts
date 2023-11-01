import { Player } from "./Player";

export type Game = {
  id: number;
  players: Array<Player>;
  complete?: boolean;
};
