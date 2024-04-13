//readonly
type Age = number;
type Name = String;
type Player ={
readonly name:Name
age?:Age
}
const playerMaker = (name:string) : Player => ({name})
const grace = playerMaker("grace")
grace.age = 12

const numbers: number[] = [1,2,3,4]
numbers.push(1)

const names: readonly string[]=["1","2"]

//tuple
//array를 생성할 수 있게 함.
//최소한의 길이를 가져야 됨.
//특정 위치에 특정 타입이 있어야 함.

function hello(name:string|number){//name은 string과 number중 하나만 가능
if(typeof name === "string"){
name
}else if(typeof name === "number"){
name
}else{// 해당 조건문은 실행이 되지 않음.
name
}
}
