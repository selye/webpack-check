/* 泛型 */

function ident<T>(arg: T): T {
  return arg
}

const inital = ident("123")


interface GenirichName<T> {
  user: T,
  name: string
}

const Genirich: GenirichName<number> = {
  user: 1,
  name: "javk"
}