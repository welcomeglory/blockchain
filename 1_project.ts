// 1. last(arr) :  이 함수는 배열의 마지막 요소를 반환해야 합니다.
function last(arr:Array<any>){
    return arr[arr.length-1]
}

  // 2. prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 배열을 return해야 합니다.
function prepend(arr:Array<any>,item:any){
    return [item, ...arr]
}

  // 3. mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
function mix(arr1:Array<any>,arr2:Array<any>){
    return [...arr1,...arr2]
}

 // 4. count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
function count(arr:Array<any>){
    return arr.length
}

 // 5. findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
function findIndex(arr:Array<any>,item:any){
    const index = arr.indexOf(item);
    return index !== -1 ? index : null; 
}

 // 6. slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
function slice(arr:Array<any>, startIndex:number, endIndex?:number){
    return arr.slice(startIndex, endIndex);
}

  // **호출 시그니처(call signatures)**
type LastFunction = (arr: any[]) => any;
type PrependFunction = (arr: any[], item: any) => any[];
type MixFunction = (arr1: any[], arr2: any[]) => any[];
type CountFunction = (arr: any[]) => number;
type FindIndexFunction = (arr: any[], item: any) => number | null;
type SliceFunction = (arr: any[], startIndex: number, endIndex?: number) => any[];

