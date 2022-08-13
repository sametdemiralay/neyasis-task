import { socialData } from "../../../database/socialData";

export default function handler(req, res) {
  res.status(200).json(socialData);
}
