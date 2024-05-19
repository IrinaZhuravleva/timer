import { Timer } from '../types/Timer'

export default function Second2({ timer }: Timer) {
  const seconds = timer % 60;
  return String(seconds).padStart(2, "0");
}
