import { tokenMap } from "../sprites/SlotToken"

const tokenList = Object.keys(tokenMap)
const tokenLen = tokenList.length;

const genRndToken = () => tokenList[Math.floor(Math.random() * tokenLen)] as never as (keyof typeof tokenMap)
const genTokenList: (n:number) => (keyof typeof tokenMap)[] = (n) => Array.apply(null, Array(n)).map(e => genRndToken())

export { genTokenList }