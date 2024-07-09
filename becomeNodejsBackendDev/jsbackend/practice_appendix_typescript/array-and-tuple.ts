const nums : number[] = [1, 2, 3, 4,];
const strArr : Array<string> = ["a", "b"];


const myTuple : [string, number] = ["sdsds", 19];
// 튜플은 함수의 매개변수가 여러 개일 때 유용
function printMyInfo(label: string, info: [string, number]) : void {
    console.log(...info);       //스프레드 연산자
}