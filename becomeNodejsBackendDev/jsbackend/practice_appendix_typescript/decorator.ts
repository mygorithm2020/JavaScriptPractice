
//////////////// 클래스 데코레이터

// 데코레이터 정의
function HelloDecorator(constructor : Function) {
    console.log("HELLO");
}

// 데코레이터 실행
@HelloDecorator
class DecoratorTest {
    constructor() {
        console.log("인스턴스 생성됨");
    }
}


type Constructor = new(...args: any[]) => {};   //생성자 메서드 타입
function HelloDecorator2(constructor: Constructor) {
    return class extends constructor {      //익명 클래스 반환
        constructor() {                 //생성자 재 정의
            console.log("hello!");  
            super();        //DecoratorTest의 생성자 실행
        }
    }
}


@HelloDecorator2
class DecoratorTest2 {
    constructor() {
        console.log("create instance");
    }
}

const dt = new DecoratorTest2();

///////////// 메서드 데코레이터
console.time("실행 시간"); 
execute();
function execute(){
    setTimeout(() => {
        console.log("실행");
        console.timeEnd("실행 시간");
        
    }, 500);
}

function timer(pLabel : string){       // 데코레이터 팩토리(데코레이터를 만들어서 반환하는) 함수, 라벨을 파라미터로 받을 수도 있음
    return function (target : any, key: string, descriptor : PropertyDescriptor) {
        const originalMethod = descriptor.value;    // 메서드
        descriptor.value = function(...args : any[]) {  // 메서드의 동작 변경
            const label = "Elapsed time";
            console.time(label);
            const res = originalMethod.apply(this, args);       // 메서드 실행, this : 클래스의 인스턴스, args : 기존 메서드의 매개변수
            console.timeEnd(label);
            return res;
        }
    }
}

class ElapsedTime {
    @timer("label")
    hello() {
        console.log("hellooooooooo");
    }
}

new ElapsedTime().hello();