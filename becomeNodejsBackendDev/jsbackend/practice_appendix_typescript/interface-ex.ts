interface Book {
    title : string;
    price : number;
    author : string;
}

let book : Book = {
    title : "책 제목",
    price : 10231,
    author : "박박박"
}


// 

interface Car {
    name: string;
    price : number;
    brand : string;
    options? : string[];
}

let avante: Car = {
    name : "아반떼",
    price : 15,
    brand : "현대",
    options : ["에어컨", "내비"]
};

let morning : Car = {
    name: "모닝",
    price : 650,
    brand : "기아",
}


// 

interface Citizen {
    id: string;
    name: string;
    region : string;
    readonly age: number;
}

let seungkyoo: Citizen = {
    id : "s",
    name : "s",
    region : "xx",
    age : 10
}

seungkyoo.age = 20; // error


//extend

interface webtoonCommon {
    title : string;
    createdDate: Date;
    updatedDate: Date;
}

interface Episode extends webtoonCommon {
    episodeNum : number;
    serieseNum : number;
}

interface Series extends webtoonCommon {
    seriesNum : number;
    author : string;
}