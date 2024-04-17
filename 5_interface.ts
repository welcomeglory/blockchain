// type Nickname = string
// type Health = number
// type Friends = Array

// type Player = {
// nickname:Nickname,
// healthBar:Health
// }

// const nico : Player = {
// nickname:"nico",
// healthBar:10
// }

// type Food = string;

// const kimchi : Food = "delicious"

type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

//오브젝트의 모양을 알려주는 방법1
// type Player = {
// nickname : string,
// team : Team,
// health : Health
// }

//react.js에서 자주 사용되는 문법
//오브젝트의 모양을 알려주는 방법2(interface)
// interface Player {
// nickname : string,
// team : Team,
// health : Health
// }

// interface Hello = string <- 이렇게는 사용불

// const nico : Player = {
// nickname:"nico",
// team:"red",
// health : 10
// }

//interface는 오로지 오브젝트의 모양을 타입스크립트에게 설명해 주기
//위해서만 사용되는 키워드.
//type키워드는 다양한 목적으로 사용.
//오브젝트의 모양을 정해줄수 있고 특정 값들로만 제한할수도 있고
//타입 alias를 만들 수 있음.(type Health = string)

interface User {
name :string
}
interface User {
lastName :string
}
interface User {
health :number
}
const nico : User = {
name : "nco",
lastName : "n",
health:10
}

// interface Player extends User {
// }
// const nico : Player = {
// name:"nico"
// }
//추상 클래스 abstract class
//추상 클래스는 이걸 상속받는 다른 클래스가 가질 property와 메소드를
//지정하도록 해
// abstract class User {
// constructor(
// //private으로 선언될 경우 상속받은 클래스에서 사용못함.
// protected firstName:string,
// protected lastName:string
// ){}
// //두 메소드를 가짐.sayHi(){},fullName()
// //string으로 된 name을 받아서 string으로 반환.
// abstract sayHi(name:string):string
// //그냥 string만 반환.
// abstract fullName():string
// }
// class Player extends User{
// fullName(){
// return ${this.firstName} ${this.lastName}
// }
// sayHi(name:string){
// return hello ${name}. My name is ${this.fullName()}
// }
// }
//interface
interface User {
firstName:string,
lastName:string,
sayHi(name:string):string,
fullName():string
}
interface Human{
health : number
}

class Player implements User, Human {
constructor(
public firstName:string,
public lastName:string,
public health : number
){}
fullName(){
return ${this.firstName} ${this.lastName}
}
sayHi(name:string){
return hello ${name}. My name is ${this.fullName()}
}
}

function makeUser(user:User){
return "hi"
}

makeUser({
firstName: "nico",
lastName: "las",
fullName: () => "xx",
sayHi: (name) => "string"
})
