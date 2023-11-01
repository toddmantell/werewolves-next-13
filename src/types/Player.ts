import { CharacterType } from "@/components/Characters/Characters";

export type Player = {
  name: string;
  id?: string;
  gameId?: number;
  character?: CharacterType;
};
