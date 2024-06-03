// any 사용
function echo(message : any) : any {
    console.log("in echo : ", message);
    return message;
}

echo("sss");

type phone = {
    name : string,
    price : number,
    brand : string,

}

const myPhone = {name: "iPhone", price: 1000, brand: "Apple"}
echo(1);
echo("안녕");
echo(myPhone);

/////////////////////////////////////////////////////
//generic 사용

function genericEcho<T>(message : T) : T {
    console.log(message);
    return message;
}

genericEcho(1);
genericEcho<string>("안녕");
genericEcho<phone>(myPhone);
// genericEcho<string>(myPhone); // 에러


///////////////////////////////////////////
// 제너릭 인터페이스

interface ILabel<T> {
    label: T;
}

const stringLabel : ILabel<string> = {
    label : "Hello"
}

console.log(stringLabel);

const numberLabel : ILabel<number> = {
    label : 100
}

//  에러
// const booleanLabel : ILabel<boolean> = {
//     label : 1.34  //에러
// }

// 제약조건으로 사용할 인터페이스
interface ICheckLength {
    length : number;
}

// 매개변수 제약조건에 length 라는 속성을 포함하는 객체를 받음
function echoWithLength<T extends ICheckLength>(message : T){
    console.log(message);
}

echoWithLength("heelo");
echoWithLength([1, 2, 3]);
echoWithLength({length : 10});
// echoWithLength(10);  //length가 없기 떄문에 에러