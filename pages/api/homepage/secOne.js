import { secOne } from "../../../database/homeSectionOne";

export default function handler(req, res) {
  res.status(200).json(secOne);
}
