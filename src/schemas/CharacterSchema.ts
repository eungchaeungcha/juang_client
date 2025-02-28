import { z } from "zod";

export const CharacterName = z.enum([
  "gam1",
  "gam2",
  "gam3",
  "gam4",
  "gam5",
  "gam6",
  "gam7",
  "gam8",
  "gam9",
]);

export const CharacterColor = z.enum([
  "#f76f6a",
  "#ff9a57",
  "#ffd969",
  "#b4e06c",
  "#75c7fa",
  "#6d94ed",
  "#ba87ed",
  "#fca2d1",
  "#b8b3c1",
]);

export type CharacterNameEnum = z.infer<typeof CharacterName>;
export type CharacterColorEnum = z.infer<typeof CharacterColor>;

export const CharacterSchema = z.object({
  name: CharacterName,
  color: CharacterColor,
});

export type CharacterFormType = z.infer<typeof CharacterSchema>;
