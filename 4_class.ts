//class  
abstract class User {
    constructor(
        protected firstName:string,
        protected lastName:string,
        protected nickName:string

    ){}
    abstract getNickName():void
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User{
    getNickName(){
        console.log(this.nickName)
    }
}

const nico = new Player("nico","las","니꼬");

nico.getFullName()

// 사전에 새 단어를 추가하고, 단어를 찾고, 그리고 단어를 삭제하는 메소
type Words = {
    [key:string]:string
}

class Dict {
    private words:Words
    constructor(){
        this.words={}
    }
    //단어를 추가하기 위한 메소드
    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def
        }
    }
    //단어를 찾기위한 메소드
    def(term:string){
        return this.words[term]
    }
}

class Word {
    constructor(
        public term :string,
        public def:string
    ){}
}

const kimchi = new Word("kimchi","한국의 음식")

const dict = new Dict()

dict.add(kimchi);

dict.def("kimchi");
