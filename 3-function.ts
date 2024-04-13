// //call signature
// type SuperPrint = {
// //number타입 배열
// // (arr: number[]):void
// // (arr: Boolean[]):void
// // (arr: string[]):void
// // (arr: (number|Boolean)[]):void
// // (arr: (number|Boolean|string)[]):void
// (a:T[]):T
// }
// 제너릭은 요구한 대로 signature를 생성해줄 수 있는 도구
type SuperPrint = <T,M>(a:T[], b:M) => T
// type SuperPrint = (a : any[]) => any

//배열 출력
const superPrint : SuperPrint = (A) => A[0]
// {
// arr.forEach(i=>console.log(i))
// }

const a = superPrint([1,2,3,4],"x")
const b = superPrint([true,false,true],1)
const c = superPrint(["a","b","c"], false)
// superPrint([1,2,true,false]) <- 동작안함
// 이유:이것들에 대한 call signature가 없기 때문
// (arr: (number|Boolean)[]):void 선언이후는 작동함.
const d = superPrint([1,2,true,false,"hello"],[])
// d.toUpperCase()

// function superPrint<T>(a:T[]){
// return a[0]
// }

// // const a = superPrint([1,2,3,4])
// const b = superPrint([true,false,true])
// const c = superPrint(["a","b","c"])
// const d = superPrint([1,2,true,false,"hello"])

// type Player = {
// name:string
// extraInfo:E
// }

// type GraceExtra = {
// favFood:string
// }

// type GracePlayer = Player

// const grace : GracePlayer = {
// name:"grace",
// extraInfo:{
// favFood:"kimchi"
// }
// }

// const lynn: Player={
// name:"jy",
// extraInfo:null
// }

type A = Array

let a:A = [1,2,3,4]

function printAllNumbers(arr:Array){

}
