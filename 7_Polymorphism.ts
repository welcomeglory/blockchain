//Polymorphism
//API구현이 아닌 API디자인 구현을 보여주기 위함

//이미 선언된 자바스크립트의 웹 스토리지 API를 위한 인터페이스
//인터페이스는 제네릭을 사용함
interface SStorage{

}
// LocalStorage 클래스를 초기화할때 T제너릭을 받을 계획
// 제너릭을 클래스로 보내고, 클래스는 제너릭을 인터페이스로 보내고
class LocalStorage {
private storage : SStorage = {}
//set메소드를 쓸 때, string형식의 key를 넣어줄 계획
set(key:string, value:T){
this.storage[key] = value;
}
//remove는 string형식의 key를 받아서 이걸 로컬 스토리지로부터 지울계
remove(key:string){
delete this.storage[key]
}
get(key:string):T{
return this.storage[key]
}
clear(){
this.storage = {}
}
}

const stringStorage = new LocalStorage()

stringStorage.get("cat")
stringStorage.set("hello","how are you")

const booleansStorage = new LocalStorage()

booleansStorage.get("xxx")
booleansStorage.set("hello",true)
