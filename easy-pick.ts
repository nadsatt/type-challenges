type MyPick<T, U extends keyof T> = {[P in U]: T[P]};
