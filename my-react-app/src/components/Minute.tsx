import { Timer } from '../types/Timer';

export default function Minute3({ timer }: Timer) {
  const a = 60;
  const minutes =
    Math.floor(timer / a) < a
      ? Math.floor(timer / a)
      : Math.floor(timer / a) % a;
  return String(minutes).padStart(2, "0");
}
