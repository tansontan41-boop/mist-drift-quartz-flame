import { create } from "zustand";
import type { CityId, ModelId } from "./plan-data";

type S = {
  city: CityId;
  model: ModelId;
  capital: number;
  setCity: (c: CityId) => void;
  setModel: (m: ModelId) => void;
  setCapital: (n: number) => void;
};

export const usePlan = create<S>((set) => ({
  city: "sz",
  model: "zero",
  capital: 0,
  setCity: (city) => set({ city }),
  setModel: (model) => set({ model }),
  setCapital: (capital) => set({ capital }),
}));
