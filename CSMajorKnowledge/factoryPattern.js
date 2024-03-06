const num = new Object(42);
const str = new Object('abc');
num.constructor.name;
str.constructor.name;

// 커피 팩토리를 통한 예제

class Latte{
    constructor() {
        this.name = "latte";
    }

}

class Espresso {
    constructor() {
        this.name = "Espresso";
    }
}

class LatteFactory {
    static createCoffee() {
        return new Latte();
    }
}

class EspressoFactory {
    static createCoffee() {
        return new Espresso();
    }
}

const factoryList = { LatteFactory, EspressoFactory};

class CoffeeFactory {
    static createCoffee(type){
        const factory = factoryList[type];
        return factory.createCoffee();
    }
}

const main = () => {
    // 라떼 커피 주문
    const coffee = CoffeeFactory.createCoffee("LatteFactory");
    console.log(coffee.name);
}

main();