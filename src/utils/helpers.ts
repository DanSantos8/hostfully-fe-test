import { Theme } from "../models/theme.models"

export const space =
  (key: keyof Theme["spacing"]) =>
  ({ theme }: { theme: Theme }) =>
    theme.spacing[key]

export const fontSize =
  (key: keyof Theme["fontSize"]) =>
  ({ theme }: { theme: Theme }) =>
    theme.fontSize[key]

export const colors =
  (key: keyof Theme["colors"]) =>
  ({ theme }: { theme: Theme }) =>
    theme.colors[key]

export const rounded =
  (key: keyof Theme["rounded"]) =>
  ({ theme }: { theme: Theme }) =>
    theme.rounded[key]

export const weight =
  (key: keyof Theme["weight"]) =>
  ({ theme }: { theme: Theme }) =>
    theme.weight[key]

export const toRem = (pixels: number): string => `${pixels / 16}rem`
