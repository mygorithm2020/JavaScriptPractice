class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    getInstance() {
        return this.instance;
    }
}

const a = new Singleton();
const b = new Singleton();
console.log(a === b);

// db 연결 예시
const URL = 'mongodb://localhost:27017/kundolapp';
const createConnection = url => ({"url": url});
class DB {
    constructor (url) {
        if (!DB.instance){
            DB.instance = createConnection(url);
        }
        return DB.instance;
    }
    connect() {
        return this.instance;
    }
}

const dbA = new DB(URL);
const dbB = new DB(URL);
console.log(dbA === dbB);