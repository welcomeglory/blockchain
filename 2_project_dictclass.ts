type Words = {
    [key:string]:string
}

class Dict {
    private words:Words

    constructor(){
        this.words={}
    }

    add(word:Word){
        // 이미 해당 단어가 사전에 존재하지 않는 경우에만 추가합니다.
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def
        }
    }

    get(term:string): string | undefined {
        // 주어진 단어의 정의를 반환합니다.
        return this.words[term];
    }

    delete(term:string): void {
        // 주어진 단어를 사전에서 삭제합니다.
        delete this.words[term];
    }

    update(word:Word): void {
        // 이미 존재하는 단어라면 해당 단어의 정의를 업데이트합니다.
        if(this.words[word.term] !== undefined){
            this.words[word.term] = word.def;
        }
    }

    showAll(): void {
        // 사전에 있는 모든 단어와 정의를 출력합니다.
        Object.keys(this.words).forEach(term => {
            console.log(`${term}: ${this.words[term]}`);
        });
    }

    count(): number {
        // 사전에 있는 총 단어의 수를 반환합니다.
        return Object.keys(this.words).length;
    }

    upsert(word: Word): void {
        // 단어를 업데이트하거나 추가합니다.
        this.words[word.term] = word.def;
    }

    exists(term:string): boolean {
        // 주어진 단어가 사전에 존재하는지 여부를 반환합니다.
        return this.words[term] !== undefined;
    }

    bulkAdd(words: Word[]): void {
        // 여러 개의 단어를 한 번에 추가합니다.
        words.forEach(word => {
            this.upsert(word);
        });
    }

    bulkDelete(terms: string[]): void {
        // 여러 개의 단어를 한 번에 삭제합니다.
        terms.forEach(term => {
            this.delete(term);
        });
    }
}

class Word {
    constructor(
        public term :string,
        public def:string
    ){}
}

// 테스트
const dictionary = new Dict();

dictionary.add(new Word("apple", "a fruit"));
dictionary.add(new Word("banana", "a yellow fruit"));

console.log(dictionary.get("apple")); // 출력: a fruit

dictionary.update(new Word("apple", "a delicious fruit"));

console.log(dictionary.get("apple")); // 출력: a delicious fruit

dictionary.showAll();
// 출력:
// apple: a delicious fruit
// banana: a yellow fruit

console.log(dictionary.count()); // 출력: 2

console.log(dictionary.exists("apple")); // 출력: true
console.log(dictionary.exists("orange")); // 출력: false

dictionary.bulkAdd([
    {term: "orange", def: "a citrus fruit"},
    {term: "grape", def: "a small juicy fruit"}
]);

dictionary.showAll();
// 출력:
// apple: a delicious fruit
// banana: a yellow fruit
// orange: a citrus fruit
// grape: a small juicy fruit

dictionary.bulkDelete(["banana", "grape"]);

dictionary.showAll();
// 출력:
// apple: a delicious fruit
// orange: a citrus fruit
profile
wel
