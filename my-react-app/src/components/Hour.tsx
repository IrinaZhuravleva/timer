import { Timer } from "../types/Timer";

export default function Hour3({ timer }: Timer) {
  const hours = Math.floor(timer / 3600);
  return String(hours).padStart(2, "0");
}
