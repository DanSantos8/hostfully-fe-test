export enum StatusEnum {
  REJECTED = "REJECTED",
  FULFILLED = "FULFILLED",
  LOADING = "LOADING",
  IDLE = "IDLE",
}

export type Status = keyof typeof StatusEnum
