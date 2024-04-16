var hometown = [
    {name : "jin", city: "seoul"},
    {name : "namj", place : "ilsan", city: "goyang"},
    {name : "hoSuk", place : "gawangju", city: "jeaonlado"},
    {name : "jimin", place : "busan", city: "geongsangdo"}
]

var isHometown = function(h, name){
    console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name} 을 찾습니다.`);

    if(h.name === name){
        console.log(`${h.name}의 고향은 ${h.city} ${h.place} 입니다.`);
        return true;
    }

    return false;
}

var h;
while(h = hometown.shift()){
    
    if (!h.name || !h.place || !h.city) continue;
    console.log("???");
    var res = isHometown(h, "hoSuk");
    if (res) break;
}