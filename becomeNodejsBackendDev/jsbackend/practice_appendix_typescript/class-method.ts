class Hello {
    constructor (){
        this.sayHello("created");
    }

    sayHello(message : string){
        console.log(message);
    }
}

const he = new Hello();
he.sayHello("sdsd");


class Rectangle {
    width : number;
    height : number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10, 5);

interface IClicker {
    count : number;
    click(): number;
}

class Clicker implements IClicker {
    count: number = 0;
    click(): number {
        this.count += 1;
        console.log(this.count);
        return this.count;
        // throw new Error("Method not implemented.");
    }

}

abstract class Logger {
    prepare(){
        console.log("============================");
        console.log("로그를 남기기 위한 준비");
    }

    log(message: string){
        this.prepare();
        this.execute(message);
        this.complete();
    }

    abstract execute(message: string) : void;

    complete() {
        console.log("작업 완료")
    }
}

class FileLogger extends Logger {
    filename : string;

    constructor(filename: string){
        super();
        this.filename = filename;
    }

    execute(message: string): void {
        throw new Error("Method not implemented.");
        
    }

}

class ConsoleLogger extends Logger {
    execute(message: string): void {
        throw new Error("Method not implemented.");
    }
    
}