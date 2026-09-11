import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function yuan(n: number) {
  const abs = Math.abs(Math.round(n));
  const sign = n < 0 ? "-" : "";
  if (abs >= 10000) {
    const wan = abs / 10000;
    const text =
      wan >= 10 ? wan.toFixed(1).replace(/\.0$/, "") : wan.toFixed(2).replace(/0$/, "").replace(/\.$/, "");
    return `${sign}¥${text}万`;
  }
  return `${sign}¥${abs.toLocaleString("zh-CN")}`;
}

export function yuanExact(n: number) {
  return `¥${Math.round(n).toLocaleString("zh-CN")}`;
}
