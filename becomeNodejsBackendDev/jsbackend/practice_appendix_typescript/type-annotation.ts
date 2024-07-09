let username : string = "ss";
let height : number = 179;
let isCon : boolean = true;

let myInfo : {
    name: string,
    height : number,
    isCon : boolean,
    gender? : string    // 선택 속성
} = {
    name : "ss",
    height : 2,
    isCon : true,
}


type nsb =  number | string | boolean;

const q : nsb = 10;

type nullablensb = nsb | null;


type coffeeSize = "small" | "medium" | "large";