type MyReadonly2<T extends {}, K extends keyof T = keyof T> =
  {readonly [P in K]: T[P]} &
  {[R in Exclude<keyof T, K>]: T[R]};
