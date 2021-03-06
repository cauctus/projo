export interface Team {
  name: string;
  color: string;
  score: number;
  penality: number;
  maxPenality: number;

  increasePenality(): void;
  decreasePenality(): void;
  increaseScore(): void;
  decreaseScore(): void;
}
