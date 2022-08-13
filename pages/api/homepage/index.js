import { homepageData } from "../../../database/homepageData";

export default function handler(req, res) {
  res.status(200).json(homepageData);
}
